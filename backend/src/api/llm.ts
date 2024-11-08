import { Router, Request, Response } from "express";
import { sendMistralMessage } from "../utils/mistralai";

const router = Router();

// Send a message to Mistral AI
router.post("/api/llm", async (req: Request, res: Response) => {
  let { message } = req.body;

  res.status(200).json({
    response: await sendMistralMessage(message),
  });
});

export default router;
