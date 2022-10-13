import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "./config"
import { Gift } from "./entity/Gift"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Gift],
    migrations: [],
    subscribers: [],
})
