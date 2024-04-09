import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Kanbas/users/routes.js";

const CONNECTION_STRING = process.env.KANBAS_DB_CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(CONNECTION_STRING, { dbName: DB_NAME });

const app = express();

// GitHub branches
const branches = ["main", "a5", "a6", "project"];

const allowedOrigins = [process.env.LOCAL_FRONTEND_URL, ...branches.map((branch) => `${branch}--${process.env.NETLIFY_URL}`)];

app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
}));

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(express.json());
app.use(session(sessionOptions));

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
