import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681243452837 implements MigrationInterface {
    name = 'Default1681243452837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "title" text NOT NULL, "Description" text NOT NULL, "Marca" text NOT NULL, "Valor" integer NOT NULL, "Mecanica" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
