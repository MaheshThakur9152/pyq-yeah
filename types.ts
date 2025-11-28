
export enum Subject {
  PHYSICS = 'Physics',
  CHEMISTRY = 'Chemistry',
  MATH = 'Mathematics'
}

export const PHYSICS_CHAPTERS = [
  "Rotational Dynamics",
  "Mechanical Properties of Fluids",
  "Kinetic Theory of Gases and Radiation",
  "Thermodynamics",
  "Oscillations",
  "Superposition of Waves",
  "Wave Optics",
  "Electrostatics",
  "Current Electricity",
  "Magnetic Fields due to Electric Current",
  "Magnetic Materials",
  "Electromagnetic Induction",
  "AC Circuits",
  "Dual Nature of Radiation and Matter",
  "Structure of Atoms and Nuclei",
  "Semiconductor Devices"
];

export const CHEMISTRY_CHAPTERS = [
  "Solid State",
  "Solutions and Colligative Properties",
  "Ionic Equilibria",
  "Chemical Thermodynamics",
  "Electrochemistry",
  "Chemical Kinetics",
  "Elements of Groups 16, 17 and 18",
  "Transition and Inner Transition Elements",
  "Coordination Compounds",
  "Halogen Derivatives",
  "Alcohols, Phenols and Ethers",
  "Aldehydes, Ketones and Carboxylic Acids",
  "Amines",
  "Biomolecules",
  "Polymers",
  "Green Chemistry and Nanochemistry"
];

export const MATH_CHAPTERS = [
  "Mathematical Logic",
  "Matrices",
  "Trigonometric Functions",
  "Pair of Straight Lines",
  "Vectors",
  "Three Dimensional Geometry",
  "Line",
  "Plane",
  "Linear Programming",
  "Continuity",
  "Differentiation",
  "Applications of Derivatives",
  "Integration",
  "Applications of Definite Integration",
  "Differential Equations",
  "Probability Distributions",
  "Binomial Distribution"
];

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category?: string;
}

export interface QuizResult {
  id: string;
  subject: Subject;
  topic?: string;
  score: number;
  totalQuestions: number;
  date: string;
  userId: string;
}

export interface User {
  id: string;
  name: string;
}

export interface QuizGenerationResponse {
  questions: Question[];
}