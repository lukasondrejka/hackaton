import { Router, Request, Response } from "express";
import collections from "./api/collections";

const routes = Router();

// Routes
routes.use(collections);

// Not Found
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found' });
});

export default routes;
