
import { GoogleGenAI, Type } from "@google/genai";
import { Subject, Question } from '../types';
import { MECHANICAL_PROPERTIES_FLUIDS_QUESTIONS, KINETIC_THEORY_GASES_QUESTIONS } from '../data/staticQuestions';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

  try {
    let promptTopic = `HSC (High School Certificate) level ${subject}`;
    if (topic && topic !== 'Full Syllabus') {
      promptTopic += `, specifically focusing on the chapter "${topic}"`;
    }

    const prompt = `Generate ${count} multiple-choice questions for ${promptTopic}. 
    Ensure the questions vary in difficulty. Provide 4 options for each question.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert academic tutor. Output valid JSON only.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  text: { type: Type.STRING, description: "The question text" },
                  options: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: "Array of 4 possible answers"
                  },
                  correctAnswerIndex: { type: Type.INTEGER, description: "0-based index of the correct option" },
                  explanation: { type: Type.STRING, description: "Brief explanation of why the answer is correct" }
                },
                required: ["id", "text", "options", "correctAnswerIndex", "explanation"]
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    const data = JSON.parse(text);
    return data.questions;

  } catch (error) {
    console.error("Failed to generate quiz:", error);
    // Fallback static questions in case of API failure or rate limit
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
  }
};
