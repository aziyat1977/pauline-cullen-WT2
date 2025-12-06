import { GoogleGenAI, Type } from "@google/genai";
import { GradingResult } from "../types";

const initGenAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const gradeUserSubmission = async (prompt: string, submission: string, criteria: string): Promise<GradingResult> => {
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
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            feedback: { type: Type.STRING },
            improvedVersion: { type: Type.STRING }
          },
          required: ["score", "feedback", "improvedVersion"]
        }
      }
    });

    const text = response.text;
    if (text) {
        // Sanitize response: remove markdown code blocks if present
        const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
        return JSON.parse(cleanText) as GradingResult;
    }
    throw new Error("Empty response");

  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      score: 0,
      feedback: "Failed to grade submission. Please try again.",
      improvedVersion: ""
    };
  }
};