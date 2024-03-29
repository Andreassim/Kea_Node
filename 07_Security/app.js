import dotenv from "dotenv/config.js";
import express from "express";

const app = express();

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

import rateLimit from 'express-rate-limit'
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter);


import gothamRouter from "./routers/gothamRouter.js"
app.use("/gotham", gothamRouter);

import authRouter from "./routers/authRouter.js"
app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 4,
	standardHeaders: true,
	legacyHeaders: false,
  })
  ,authRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT);