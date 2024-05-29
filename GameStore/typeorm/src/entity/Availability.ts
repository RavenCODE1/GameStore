import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Availability {

  @PrimaryGeneratedColumn()
  availabilityId: number;

  @Column()
  availabilityStatus: string;
}
