import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Platform {

  @PrimaryGeneratedColumn()
  platformId: number;

  @Column()
  platformName: string;
}