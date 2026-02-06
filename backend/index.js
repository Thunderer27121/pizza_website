import "dotenv/config";
import express from "express";
import cors from "cors";
import paymentRoutes from "./route/paymentRoute.js";

const port = process.env.PORT ?? 5000;
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
  console.log(`request received on :- ${req.url}`);
  next();
});
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true,
}));
app.get("/health", (req, res) => {
  res.status(200).json({ status: "awake" });
});

app.use("/api/payment", paymentRoutes);


app.listen(port, ()=>{
    console.log(`the server is running on port :- ${port}`);
})
