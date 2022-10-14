import Express from "express"
import { AppDataSource } from "./data-source"
import "reflect-metadata"
import { giftService } from "./modules/gift";
import { config } from "./config";

AppDataSource.initialize().then(async () => {
    const app = Express();

    app.use(Express.json());

    app.get("/api/gifts", async (_, res) => {
        const gifts = await giftService.fetchAll()
        res.send(gifts)
    })

    app.post("/api/gifts", async (req, res) => {
        const { webLink } = req.body
        await giftService.createOne(webLink)
        res.sendStatus(201)
    })

    app.listen(config.PORT, async () => {
        console.log(`Server is running on port ${config.PORT}`)
    })
}).catch(error => console.log(error))
