import express, {Express} from "express";
import dotenv from "dotenv";
import {DataSource} from "typeorm";
import cors from "cors";
import bodyParser from "body-parser";
import {NotesEntity} from "./src/notes/notes.entity";
import {noteRouter} from "./src/notes/notes.router";

// Creating an instance of the Express application.
const app : Express = express();
// Loading environment variables from the `.env` file.
dotenv.config();

//parse request body
app.use(bodyParser.json());

//
app.use(cors());

/**
 * Initializing a TypeORM DataSource object.
 * This defines the connection to the MySQL database using environment variables.
 */
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [NotesEntity],
    synchronize: true,
})

// Port on which the Express app will run, defaulting to 3200 if not specified in the environment.
const port : string | number = process.env.PORT || 3200;

/**
 * Initializing the database connection.
 * If successful, the server starts listening on the specified port.
 */
AppDataSource.initialize().then(() => {
    app.listen(port)
    console.log("Data source is initialized")
}).catch(err => {
    console.error("Error during initialization", err);
})

app.use('/', noteRouter)
