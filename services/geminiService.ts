
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RUSLAN_PERSONA } from "../constants";
import { Message } from "../types";

export const sendMessageToRuslan = async (history: Message[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: RUSLAN_PERSONA,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Извини, возникла техническая заминка. Давай попробуем еще раз.";
  } catch (error) {
    console.error("Gemini Error:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
        return "Проблема с ключом доступа. Попробуй обновить страницу.";
    }
    return "Не удалось связаться с Русланом. Проверь соединение.";
  }
};
