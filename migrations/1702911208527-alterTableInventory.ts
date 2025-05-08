import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableInventory1702911208527 implements MigrationInterface {
    name = 'AlterTableInventory1702911208527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD \`unity\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP COLUMN \`unity\``);
    }

}
