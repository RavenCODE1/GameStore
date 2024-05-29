import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Director {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    nationality: string;

}
