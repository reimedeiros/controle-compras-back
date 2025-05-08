import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableInventory21702911560675 implements MigrationInterface {
    name = 'AlterTableInventory21702911560675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD \`quantity\` float NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD \`quantity\` int NOT NULL`);
    }

}
