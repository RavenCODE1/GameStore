import "reflect-metadata"
import { DataSource } from "typeorm"
import { Genre } from "./entity/Genre"
import { Game } from "./entity/Game"
import { Availability } from "./entity/Availability"
import { Platform } from "./entity/Platform"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.116.143.43",
    port: 5432,
    username: "postgres",
    password: "g6$4cV42g#EK!Pk",
    database: "GameStoreDB",
    synchronize: false,
    logging: false,
    entities: [Game, Platform, Genre, Availability], 
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})
