import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import workoutRoutes from "./routes/workouts.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/workouts', workoutRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


