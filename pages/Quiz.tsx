
import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Subject, Question, QuizResult, User } from '../types';
import { generateQuizQuestions } from '../services/geminiService';
import Button from '../components/Button';

interface QuizPageProps {
  user: User;
  saveResult: (result: QuizResult) => void;
}

const Quiz: React.FC<QuizPageProps> = ({ user, saveResult }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const subjectParam = searchParams.get('subject') as Subject;
  const topicParam = searchParams.get('topic');
  const filterParam = searchParams.get('filter');

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false); // New state for non-MCQs
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Reusable function to fetch/start quiz
  const fetchQuiz = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      setIsFinished(false);
      
      // Pass filterParam to service
      const generatedQuestions = await generateQuizQuestions(
          subjectParam, 
          topicParam || undefined, 
          5, // Default count (ignored if filter is present for static questions)
          filterParam || undefined
      );
      
      setQuestions(generatedQuestions);
      
      // Reset game state
      setScore(0);
      setCurrentQuestionIndex(0);
      setSelectedOptionIndex(null);
      setShowAnswer(false);
    } catch (err) {
      setError('Failed to load quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [subjectParam, topicParam, filterParam]);

  useEffect(() => {
    if (!subjectParam || !Object.values(Subject).includes(subjectParam)) {
      navigate('/');
      return;
    }
    
    // Initial fetch
    fetchQuiz();
  }, [subjectParam, navigate, fetchQuiz]);

  const handleOptionSelect = (index: number) => {
    if (selectedOptionIndex !== null) return;
    setSelectedOptionIndex(index);
  };

  const handleNext = (selfGradeCorrect?: boolean) => {
    // If it's an MCQ
    if (questions[currentQuestionIndex].options.length > 0) {
      if (selectedOptionIndex === questions[currentQuestionIndex].correctAnswerIndex) {
        setScore(prev => prev + 1);
      }
    } else {
        // If it's a self-graded question
        if (selfGradeCorrect) {
            setScore(prev => prev + 1);
        }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setShowAnswer(false);
    } else {
      finishQuiz(selfGradeCorrect);
    }
  };

  const finishQuiz = useCallback((lastQuestionSelfCorrect?: boolean) => {
    let finalScore = score;
    const currentQ = questions[currentQuestionIndex];
    
    // Check MCQ logic
    if (currentQ.options.length > 0) {
        if (selectedOptionIndex === currentQ.correctAnswerIndex) {
            finalScore += 1;
        }
    } else {
        // Check Self-grade logic for last question
        if (lastQuestionSelfCorrect) {
            finalScore += 1;
        }
    }
    
    setScore(finalScore);
    setIsFinished(true);

    const result: QuizResult = {
      id: Date.now().toString(),
      subject: subjectParam,
      topic: topicParam || undefined,
      score: finalScore,
      totalQuestions: questions.length,
      date: new Date().toISOString(),
      userId: user.id
    };
    saveResult(result);
  }, [score, selectedOptionIndex, currentQuestionIndex, questions, subjectParam, topicParam, user.id, saveResult]);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
             <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo-600 animate-spin"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 font-bold">AI</div>
        </div>
        <p className="text-gray-900 text-xl font-semibold mt-6">Constructing Quiz...</p>
        <p className="text-gray-500 text-sm mt-2 max-w-xs text-center">Analysing {topicParam || subjectParam} syllabus...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-red-100 max-w-md mx-auto mt-10">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Generation Failed</h3>
        <p className="text-gray-500 mb-6 px-6">{error}</p>
        <Button onClick={fetchQuiz} variant="primary">Try Again</Button>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let emoji = '';
    let colorClass = '';

    if (percentage >= 80) {
        message = "Outstanding Performance!";
        emoji = "🏆";
        colorClass = "text-green-600";
    } else if (percentage >= 60) {
        message = "Good Job! Keep practicing.";
        emoji = "💪";
        colorClass = "text-indigo-600";
    } else {
        message = "Keep studying! You'll get there.";
        emoji = "📚";
        colorClass = "text-orange-600";
    }

    return (
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto overflow-hidden border border-gray-100 mt-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-10 text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="text-3xl font-bold text-white mb-2">Quiz Completed</h3>
          <p className="text-indigo-100">{subjectParam} {topicParam ? `• ${topicParam}` : ''}</p>
          {filterParam && <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">{filterParam}</span>}
        </div>
        
        <div className="px-6 py-10 text-center">
          <div className="flex justify-center items-end mb-8">
             <span className={`text-6xl font-extrabold ${colorClass}`}>{score}</span>
             <span className="text-2xl text-gray-400 font-medium mb-2">/{questions.length}</span>
          </div>
          
          <h4 className="text-xl text-gray-800 font-semibold mb-8">{message}</h4>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button onClick={() => navigate('/')} variant="outline">Back to Dashboard</Button>
            <Button onClick={fetchQuiz} variant="primary">Take Another Quiz</Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isMCQ = currentQuestion.options && currentQuestion.options.length > 0;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header Info */}
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-lg font-bold text-gray-900">{subjectParam}</h2>
            <div className="flex items-center space-x-2">
                {topicParam && <p className="text-sm text-gray-500">{topicParam}</p>}
                {filterParam && <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium border border-indigo-100">{filterParam}</span>}
            </div>
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-1 text-sm font-medium text-gray-600">
            {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 mb-8 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 border border-gray-100 transition-all">
        {currentQuestion.category && (
            <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                    {currentQuestion.category}
                </span>
            </div>
        )}
        <h2 className="text-xl sm:text-2xl text-gray-900 font-bold mb-8 leading-relaxed whitespace-pre-wrap">
          {currentQuestion.text}
        </h2>

        {isMCQ ? (
            // MCQ RENDERING
            <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
                let btnClass = "w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 flex items-center group relative ";
                let circleClass = "flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full border-2 mr-4 text-sm font-bold transition-colors ";
                
                if (selectedOptionIndex === null) {
                btnClass += "border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-md cursor-pointer";
                circleClass += "border-gray-300 text-gray-500 group-hover:border-indigo-400 group-hover:text-indigo-600";
                } else {
                // Revealed state
                if (idx === currentQuestion.correctAnswerIndex) {
                    btnClass += "bg-green-50 border-green-500 ring-1 ring-green-500";
                    circleClass += "bg-green-500 border-green-500 text-white";
                } else if (idx === selectedOptionIndex) {
                    btnClass += "bg-red-50 border-red-500 ring-1 ring-red-500";
                    circleClass += "bg-red-500 border-red-500 text-white";
                } else {
                    btnClass += "opacity-40 border-gray-100 grayscale";
                    circleClass += "border-gray-200 text-gray-400";
                }
                }

                return (
                <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={selectedOptionIndex !== null}
                    className={btnClass}
                >
                    <span className={circleClass}>
                        {String.fromCharCode(65 + idx)}
                    </span>
                    <span className={`text-base font-medium ${selectedOptionIndex !== null && idx === currentQuestion.correctAnswerIndex ? 'text-green-900' : 'text-gray-700'}`}>
                        {option}
                    </span>
                    
                    {selectedOptionIndex !== null && idx === currentQuestion.correctAnswerIndex && (
                        <div className="absolute right-4 text-green-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                    {selectedOptionIndex !== null && idx === selectedOptionIndex && idx !== currentQuestion.correctAnswerIndex && (
                        <div className="absolute right-4 text-red-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </button>
                );
            })}
            </div>
        ) : (
            // NON-MCQ RENDERING (Flashcard Style)
            <div className="mt-8">
                {!showAnswer ? (
                    <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500 mb-4">Think about the answer, then click to reveal.</p>
                        <Button onClick={() => setShowAnswer(true)} variant="secondary">Reveal Answer</Button>
                    </div>
                ) : (
                    <div className="animate-fade-in bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <div className="flex items-start">
                             <div className="flex-shrink-0 mt-1">
                                <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3 w-full">
                                <h4 className="text-sm font-bold text-blue-900 mb-2">Correct Answer / Solution</h4>
                                <div className="text-blue-800 leading-relaxed whitespace-pre-wrap text-sm font-medium">
                                    {currentQuestion.explanation}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )}

        {isMCQ && selectedOptionIndex !== null && (
          <div className="mt-8 p-5 bg-blue-50/80 rounded-xl border border-blue-100 animate-fade-in">
            <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <h4 className="text-sm font-bold text-blue-900 mb-1">Explanation</h4>
                    <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-wrap">{currentQuestion.explanation}</p>
                </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-end">
            {isMCQ ? (
                <Button 
                    onClick={() => handleNext()} 
                    disabled={selectedOptionIndex === null}
                    className="w-full sm:w-auto text-lg px-8 py-3"
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            ) : (
                // Logic for non-MCQ next buttons
                showAnswer ? (
                    <div className="w-full flex flex-col sm:flex-row gap-3 justify-end">
                        <Button variant="danger" onClick={() => handleNext(false)} className="w-full sm:w-auto">
                            I missed it
                        </Button>
                        <Button variant="primary" onClick={() => handleNext(true)} className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                            I got it right
                        </Button>
                    </div>
                ) : null
            )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
