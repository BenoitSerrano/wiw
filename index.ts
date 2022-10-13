import Express from "express"
import { client } from "./src/database";

const app = Express();

app.get("/", (_, res) => {
    res.send(`Hello !`)
})

app.listen(3001, async () => {
    console.log(`Server is running on port 3001. Connecting to the database...`)
    await client.connect();
    console.log(`Database connected!`)
})