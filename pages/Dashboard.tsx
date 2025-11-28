
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Subject, PHYSICS_CHAPTERS, CHEMISTRY_CHAPTERS, MATH_CHAPTERS } from '../types';

const SubjectCard: React.FC<{ 
    subject: Subject; 
    description: string; 
    gradient: string;
    iconColor: string;
    icon: React.ReactNode; 
    onClick: () => void 
}> = ({ subject, description, gradient, iconColor, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="relative group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:-translate-y-1"
  >
    <div className={`h-2 w-full ${gradient}`}></div>
    <div className="p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-2xl ${iconColor} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
           {React.cloneElement(icon as React.ReactElement<any>, { className: `h-8 w-8 ${iconColor.replace('bg-', 'text-').replace('bg-opacity-10', '')}` })}
        </div>
        <div className="bg-gray-50 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            HSC
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {subject}
      </h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
        Start Quiz 
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubjectForChapters, setSelectedSubjectForChapters] = useState<Subject | null>(null);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubjectForChapters(subject);
  };

  const startQuiz = (subject: Subject, topic?: string, filter?: string) => {
    let url = `/quiz?subject=${subject}`;
    if (topic) {
        url += `&topic=${encodeURIComponent(topic)}`;
    }
    if (filter) {
        url += `&filter=${encodeURIComponent(filter)}`;
    }
    navigate(url);
    setSelectedSubjectForChapters(null);
  };

  const getChapters = (subject: Subject | null) => {
    switch (subject) {
      case Subject.PHYSICS: return PHYSICS_CHAPTERS;
      case Subject.CHEMISTRY: return CHEMISTRY_CHAPTERS;
      case Subject.MATH: return MATH_CHAPTERS;
      default: return [];
    }
  };

  return (
    <div className="px-4 sm:px-0 relative">
      <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-2">
            What would you like to learn today?
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Select a subject to start a personalized AI-powered quiz session.
          </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SubjectCard
          subject={Subject.PHYSICS}
          description="Master rotational dynamics, thermodynamics, wave optics, and electromagnetic induction."
          gradient="bg-gradient-to-r from-blue-400 to-indigo-500"
          iconColor="bg-blue-600"
          onClick={() => handleSubjectSelect(Subject.PHYSICS)}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          }
        />
        <SubjectCard
          subject={Subject.CHEMISTRY}
          description="Explore organic compounds, chemical kinetics, solutions, and electrochemistry."
          gradient="bg-gradient-to-r from-emerald-400 to-teal-500"
          iconColor="bg-emerald-600"
          onClick={() => handleSubjectSelect(Subject.CHEMISTRY)}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          }
        />
        <SubjectCard
          subject={Subject.MATH}
          description="Solve complex problems in calculus, trigonometry, vectors, and statistics."
          gradient="bg-gradient-to-r from-rose-400 to-orange-500"
          iconColor="bg-rose-600"
          onClick={() => handleSubjectSelect(Subject.MATH)}
          icon={
             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>
      
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
                <span className="text-4xl font-black text-indigo-100 mb-2">01</span>
                <h4 className="font-semibold text-gray-900">Select Topic</h4>
                <p className="text-gray-500 text-sm mt-1">Choose your subject and specific chapter to focus your practice.</p>
            </div>
            <div className="flex flex-col">
                <span className="text-4xl font-black text-indigo-100 mb-2">02</span>
                <h4 className="font-semibold text-gray-900">Take AI Quiz</h4>
                <p className="text-gray-500 text-sm mt-1">Answer 5 unique, AI-generated questions tailored to your level.</p>
            </div>
            <div className="flex flex-col">
                <span className="text-4xl font-black text-indigo-100 mb-2">03</span>
                <h4 className="font-semibold text-gray-900">Track Progress</h4>
                <p className="text-gray-500 text-sm mt-1">Get instant feedback and track your improvement over time.</p>
            </div>
        </div>
      </div>

      {/* Chapter Selection Modal */}
      {selectedSubjectForChapters && (
         <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm" onClick={() => setSelectedSubjectForChapters(null)}></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full border border-gray-100">
                    <div className="bg-white px-6 py-6">
                        <div className="mb-6">
                            <h3 className="text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                                {selectedSubjectForChapters} Topics
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Choose a specific chapter to practice or take a test on the full syllabus.
                            </p>
                        </div>
                        
                        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            <button 
                                onClick={() => startQuiz(selectedSubjectForChapters)}
                                className="w-full flex items-center justify-between px-5 py-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl font-semibold transition-colors border border-indigo-100 group"
                            >
                                <span>Full Syllabus (Mixed)</span>
                                <span className="bg-white p-1 rounded-full text-indigo-500 group-hover:text-indigo-700">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                            {getChapters(selectedSubjectForChapters).map((chapter, idx) => {
                                // Special handling for static question chapters to show filters
                                const isStaticChapter = 
                                    (selectedSubjectForChapters === Subject.PHYSICS && chapter === "Mechanical Properties of Fluids") ||
                                    (selectedSubjectForChapters === Subject.PHYSICS && chapter === "Kinetic Theory of Gases and Radiation");
                                    
                                if (isStaticChapter) {
                                    return (
                                        <div key={idx} className="border border-indigo-200 rounded-xl overflow-hidden bg-indigo-50/30">
                                            <div className="px-5 py-3 border-b border-indigo-100 bg-indigo-50/50 flex items-center">
                                                <span className="bg-white text-indigo-600 text-xs w-6 h-6 flex items-center justify-center rounded-full mr-3 font-bold border border-indigo-100">{idx + 1}</span>
                                                <span className="font-semibold text-gray-800">{chapter}</span>
                                            </div>
                                            <div className="p-3 grid grid-cols-2 gap-2">
                                                <button onClick={() => startQuiz(selectedSubjectForChapters, chapter, "1 Mark MCQ")} className="text-xs bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-700 py-2 rounded-lg transition-colors">1 Mark MCQ</button>
                                                <button onClick={() => startQuiz(selectedSubjectForChapters, chapter, "1 Mark VSA")} className="text-xs bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-700 py-2 rounded-lg transition-colors">1 Mark VSA</button>
                                                <button onClick={() => startQuiz(selectedSubjectForChapters, chapter, "2 Marks")} className="text-xs bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-700 py-2 rounded-lg transition-colors">2 Marks</button>
                                                <button onClick={() => startQuiz(selectedSubjectForChapters, chapter, "3 Marks")} className="text-xs bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-700 py-2 rounded-lg transition-colors">3 Marks</button>
                                                <button onClick={() => startQuiz(selectedSubjectForChapters, chapter)} className="col-span-2 text-xs bg-indigo-600 text-white hover:bg-indigo-700 py-2 rounded-lg transition-colors shadow-sm">Mixed (Random 5)</button>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => startQuiz(selectedSubjectForChapters, chapter)}
                                        className="w-full text-left px-5 py-3 border border-gray-100 hover:border-indigo-300 hover:bg-gray-50 hover:text-indigo-700 rounded-xl text-sm text-gray-700 transition-all font-medium flex items-center"
                                    >
                                        <span className="bg-gray-100 text-gray-500 text-xs w-6 h-6 flex items-center justify-center rounded-full mr-3">{idx + 1}</span>
                                        {chapter}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse border-t border-gray-100">
                        <button 
                            type="button" 
                            className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none ring-1 ring-gray-200 sm:w-auto sm:text-sm"
                            onClick={() => setSelectedSubjectForChapters(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default Dashboard;
