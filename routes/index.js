import express from "express";

import * as controller from "../controllers/index.js";

export const routes = express.Router();

routes.get("/", controller.searchCityByName);

// authorRoutes.get("/", authorController.getAuthors);

// authorRoutes.get("/:id", authorController.getAuthorById);

// authorRoutes.post("/", authorController.createAuthor);

// authorRoutes.patch("/:id", authorController.updateAuthorById);

// authorRoutes.delete("/:id", authorController.deleteAuthorById);
