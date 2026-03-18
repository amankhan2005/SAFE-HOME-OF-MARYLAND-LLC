 import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});


// 🔥 ERROR MIDDLEWARE (LAST ME)
app.use(errorHandler);

export default app;