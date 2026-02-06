import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRoutes from "./news.js";

dotenv.config(); // 👈 load env variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
