import { Router, Request, Response } from "express";
import { mongoose } from "../app";

const router = Router();

// Get all documents from a collection
router.get("/api/collections/:collection", async (req: Request, res: Response) => {
  const { collection } = req.params;

  try {
    const data = await mongoose.connection
      .collection(collection)
      .find(req.query)
      .toArray();

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: error.message
    });
  }
});

// Get a document by id from a collection
router.get("/api/collections/:collection", async (req: Request, res: Response) => {
  const { collection, id } = req.params;

  try {
    const data = await mongoose.connection
      .collection(collection)
      .findOne({
        _id: new mongoose.Types.ObjectId(id)
      });

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: error.message
    });
  }
});

// Create a new document in a collection
router.post("/api/collections/:collection", async (req: Request, res: Response) => {
  const { collection } = req.params;

  console.log(req.body);

  try {
    const result = await mongoose.connection
      .collection(collection)
      .insertOne({
        ...req.body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    if (result.insertedId) {
      res.status(201).json(await mongoose.connection
        .collection(collection)
        .findOne({ _id: result.insertedId }));
    } else {
      res.status(500).json({
        error: "Internal Server Error",
        errorMessage: "Document not created"
      });
    }

  } catch (error: any) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: error.message
    });
  }
});

// Update a document by id in a collection
router.put("/api/collections/:collection", async (req: Request, res: Response) => {
  const { collection, id } = req.params;

  try {
    const result = await mongoose.connection
      .collection(collection)
      .updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { ...req.body, updatedAt: new Date() } }
      );

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: error.message
    });
  }
});

// Delete a document by id from a collection
router.delete("/api/collections/:collection", async (req: Request, res: Response) => {
  const { collection, id } = req.params;

  try {
    const result = await mongoose.connection
      .collection(collection)
      .deleteOne({
        _id: new mongoose.Types.ObjectId(id),
      });

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: error.message
    });
  }
});

export default router;
