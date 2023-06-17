import pg from "pg";

const connectionString = process.env.DB_CONNECTION_STRING;

if (!connectionString) {
    throw new Error(
        "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
    );
}

//create a new pool object with the connection string to make multiple connections to the database easier
export const pool = new pg.Pool({
    connectionString,
});
