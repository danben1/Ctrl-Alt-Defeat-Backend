//IMPORT DEPENDENCIES
import express from "express";
import morgan from "morgan";

//IMPORT ROUTES
//import the routes from the routes folder which the api needs to listen for and what controller function to run on that route
import { guideRoots } from "./routes/guides.js";

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

//SET UP ROUTES
//any request that starts with /api/guides will be handled by the guideRoutes object for further handling and routing
app.use("/api/guides", guideRoots);


//SET UP SERVER TO LISTEN ON DEFINED PORT
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});