
import { Subject, Question } from '../types';
import { MECHANICAL_PROPERTIES_FLUIDS_QUESTIONS, KINETIC_THEORY_GASES_QUESTIONS } from '../data/staticQuestions';

// Helper to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateQuizQuestions = async (subject: Subject, topic?: string, count: number = 5, filter?: string): Promise<Question[]> => {
  // Check for static content first
  let staticQuestions: Question[] | null = null;

  if (subject === Subject.PHYSICS) {
    if (topic === "Mechanical Properties of Fluids") {
        staticQuestions = MECHANICAL_PROPERTIES_FLUIDS_QUESTIONS;
    } else if (topic === "Kinetic Theory of Gases and Radiation") {
        staticQuestions = KINETIC_THEORY_GASES_QUESTIONS;
    }
  }

  if (staticQuestions) {
    // Filter by category if provided
    if (filter) {
        staticQuestions = staticQuestions.filter(q => q.category === filter);
        // Return ALL questions for that category (no count limit)
        return shuffleArray(staticQuestions);
    }
    // Default mixed behavior (subset)
    return shuffleArray(staticQuestions).slice(0, count);
  }

  // Fallback static questions since API is removed
  return [
    {
      id: 1,
      text: `(Fallback) What is the unit of Force?`,
      options: ["Newton", "Joule", "Watt", "Pascal"],
      correctAnswerIndex: 0,
      explanation: "The SI unit of force is the Newton (N)."
    },
    {
      id: 2,
      text: `(Fallback) What is the chemical symbol for Gold?`,
      options: ["Ag", "Au", "Fe", "Hg"],
      correctAnswerIndex: 1,
      explanation: "Au stands for Aurum, which is Latin for Gold."
    }
  ];
};
