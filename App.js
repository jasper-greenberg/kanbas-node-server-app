

import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

const CONNECTION_STRING = process.env.KANBAS_DB_CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors());
app.use(express.json());

Hello(app)
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
