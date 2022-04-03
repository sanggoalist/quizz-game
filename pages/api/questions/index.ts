// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { QuestionResponse } from '../../../libs/type'
import questions from "../../../dataset/quizz-question.json";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionResponse>
) {
  res.status(200).json(questions);
}
