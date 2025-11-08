import { Router } from "express";
import authRouter from "./auth.route.js";

const routes = Router();

routes.use("/auth", authRouter);

export default routes;
