import Express from "express"
import { AppDataSource } from "./data-source"
import "reflect-metadata"
import { giftService } from "./modules/gift";

AppDataSource.initialize().then(async () => {
    const app = Express();

    app.get("/api/gifts", async (_, res) => {
        const gifts = await giftService.fetchAll()
        res.send(gifts)
    })

    app.post("/api/gifts", async (_, res) => {
        await giftService.createOne("truc")
        res.sendStatus(201)
    })

    app.listen(3001, async () => {
        console.log(`Server is running on port 3001`)
    })
}).catch(error => console.log(error))
