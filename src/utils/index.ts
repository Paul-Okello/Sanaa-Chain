import { surpriseMePrompts } from "@/constants";
import { Configuration, OpenAIApi } from "openai";

export function getRandomPrompt(prompt: string):string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

// export async function downloadImage(_id, photo) {
//   FileSaver.saveAs(photo, `download-${_id}.jpg`);
// }

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY,
});
export const openai = new OpenAIApi(configuration);

export const cardContent = [
  {
    title: "Starter",
    benefits: [
      "1000 fast generations per month",
      "No slow generations",
      "2 parallel fast generations",
      "Commercial license (solo)",
      "Images are public",
    ],
    price: 5,
    annualPrice: 96,
  },
  {
    title: "Pro",
    benefits: [
      "3000 fast generations per month",
      "Unlimited slow generations",
      "3 parallel fast generations",
      "Commercial license",
      "Images are public",
    ],
    price: 12,
    annualPrice: 288,
  },
  {
    title: "Max",
    benefits: [
      "7000 fast generations per month",
      "Unlimited slow generations",
      "3 parallel fast generations",
      "Commercial license",
      "Keep images private",
    ],
    price: 24,
    annualPrice: 576,
  },
];
