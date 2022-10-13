import Express from "express"
import { AppDataSource } from "./data-source"
import "reflect-metadata"

AppDataSource.initialize().then(async () => {
    const app = Express();

    app.get("/api/gifts", async (_, res) => {
        res.send("Hello")
    })

    app.listen(3001, async () => {
        console.log(`Server is running on port 3001`)
    })
}).catch(error => console.log(error))
