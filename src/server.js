import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import sequelize from "./config/databaseConnection.js";

import productRouter from "./routers/productRouter.js";

config();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

sequelize.sync().then(() => console.log("Database Connected"))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})