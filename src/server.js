import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import sequelize from "./config/databaseConnection.js";

import productRouter from "./routers/productRouter.js";

const port = process.env.PORT || 3000;

config();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

sequelize.sync().then(() => console.log("Database Connected"))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1", productRouter);

if (process.env.RENDER) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
}

export default app;