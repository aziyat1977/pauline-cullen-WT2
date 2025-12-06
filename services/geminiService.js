import { GoogleGenAI, Type } from "@google/genai";

// Safe access to process.env for browser compatibility
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Could not access process.env");
  }
  return null;
};

const initGenAI = () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("API Key missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const gradeUserSubmission = async (prompt, submission, criteria) => {
  const ai = initGenAI();
  if (!ai) return { score: 0, feedback: "API Key is missing. Cannot grade.", improvedVersion: "" };

  const systemInstruction = `You are an expert IELTS Writing Examiner (Pauline Cullen style). 
  Analyze the student's submission based strictly on the criteria: ${criteria}.
  Be direct, encouraging but strict on standard IELTS rules (no informal language, clear structure).
  Give a score from 1-9 (can be 6.5 etc) and specific feedback.`;

  const userPrompt = `
    Prompt/Task: ${prompt}
    Student Answer: ${submission}
  `;

  try {
    const response = await ai.models.generateContent({
      model