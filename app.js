//IMPORT DEPENDENCIES
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createClient } from '@supabase/supabase-js';

//IMPORT ROUTES
//import the routes from the routes folder which the api needs to listen for and what controller function to run on that route
import { routes } from "./routes/index.js";

//SET UP EXPRESS SERVER
const app = express();

//SET UP PORT TO LISTEN ON
//port number comes from .env file, which is gitignored for security reasons
const PORT = process.env.PORT;

//SET UP MIDDLEWARE
//middleware is code that runs between the HTTP request and the response
//morgan logs out information about the HTTP request and response to the console - "dev" is a pre-defined format for the logs
app.use(morgan("dev"));
//express.json() parses incoming requests in JSON and makes it available on req.body
app.use(express.json());
//cors allows cross-origin resource sharing, which is needed for the front end to access the API
app.use(cors());

//SET UP ROUTES
//any request that starts with /api/guides will be handled by the guideRoutes object for further handling and routing
app.use("/", routes);

//SET UP SERVER TO LISTEN ON DEFINED PORT
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
