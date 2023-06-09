import express from "express";

import {
  home,
  join,
  login,
  logout,
  accounting,
} from "../controllers/masterController";
import { search } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);
rootRouter.get("/logout", logout);
rootRouter.get("/search", search);
rootRouter.get("/accounting", accounting);

export default rootRouter;
