import express from "express";
import { getAllUsers, getUser, newUser } from "../controllers/user.js";

const app = express.Router();


// route /api/v1/user/new
app.post("/new",newUser);

// route /api/v1/user/new/all
app.get("/all", getAllUsers);

// route /api/v1/user/new/:id
app.get("/:id", getUser);

export default app;
