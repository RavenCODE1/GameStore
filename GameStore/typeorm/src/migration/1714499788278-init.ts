import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714499788278 implements MigrationInterface {
  name = 'Init1714499788278'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "genre" ("id" SERIAL NOT NULL, "genreName" character varying NOT NULL, CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "availability" ("id" SERIAL NOT NULL, "availabilityStatus" character varying NOT NULL, CONSTRAINT "PK_4c17ecb2b175322407ebbaef5c7" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "platform" ("id" SERIAL NOT NULL, "platformName" character varying NOT NULL, CONSTRAINT "PK_b85b179882f31c43324ef124fea" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "gameName" character varying NOT NULL, "releaseYear" integer NOT NULL, "genre_id" integer NOT NULL, "availability_id" integer NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "FK_genre_id" FOREIGN KEY ("genre_id") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "FK_availability_id" FOREIGN KEY ("availability_id") REFERENCES "availability"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "FK_availability_id"`);
    await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "FK_genre_id"`);
    await queryRunner.query(`DROP TABLE "game"`);
    await queryRunner.query(`DROP TABLE "platform"`);
    await queryRunner.query(`DROP TABLE "availability"`);
    await queryRunner.query(`DROP TABLE "genre"`);
  }
}
