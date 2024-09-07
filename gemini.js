import {
  GoogleGenerativeAI,
  SchemaType,
} from "@google/generative-ai";

apyKey =""

const genAI = new GoogleGenerativeAI(apyKey);

response.text

async function maisinformacosGemini(paroquia) {
    try {
        const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' }); // Escolha um modelo mais adequado
        const prompt = `Um resumo com 500 caracteres com Informações Históricas, Grupos e pastorais sobre a ${paroquia} da cidade de Belém`;
        const result = await model.generateContent(prompt);
        return result.text;
      } catch (error) {
        console.error('Ocorreu um erro:', error);
        return 'Não foi possível gerar o resumo.';
      }
  }