import { Router, Request, Response } from "express";
import collections from "./api/collections";
import llm from "./api/llm";

const routes = Router();

// LLM routes
routes.use(llm);

// Generic database collections routes
routes.use(collections);

// Not Found
routes.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

export default routes;
