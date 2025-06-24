import express, { Application, Request, Response } from "express";

const app: Application = express();


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log("API is working");
})

export default app