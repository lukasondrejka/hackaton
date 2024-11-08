import { Mistral } from '@mistralai/mistralai';
import {ChatCompletionResponse} from "@mistralai/mistralai/models/components";

const apiKey = process.env.MISTRAL_API_KEY || 'Kd7LHVHCXMZHRuxcjQgz72F7UJikpo2W';

const client = new Mistral({apiKey: apiKey});

async function sendMistralMessage(message: string) {
  const chatResponse: ChatCompletionResponse = await client.chat.complete({
    model: 'mistral-large-latest',
    messages: [
      {role: 'user', content: message}
    ],
  });



  return chatResponse.choices![0].message.content;
}

export { sendMistralMessage };
