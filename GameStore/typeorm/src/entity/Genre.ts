import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Genre } from "./Platform";
import { Studio } from "./Studio";
import { Director } from "./Game";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    movieName: string;

    @Column()
    releaseYear: number;

    @Column()
    genre_id: number;

    @ManyToOne(() => Genre)
    @JoinColumn({ name: "genre_id" })
    genre: Genre;

    @Column()
    studio_id: number;

    @ManyToOne(() => Studio)
    @JoinColumn({ name: "studio_id" })
    studio: Studio;

    @Column()
    director_id: number;

    @ManyToOne(() => Director)
    @JoinColumn({ name: "director_id" })
    director: Director;

}
