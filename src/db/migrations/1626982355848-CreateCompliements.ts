import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliements1626982355848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"compliements",
            columns: [
                {
                    name:"id",
                    type:"uuid",
                    isPrimary: true
                },
                {
                    name: "user_sender",
                    type: "uuid",                    
                },
                {
                    name: "user_receiver",
                    type: "uuid",    
                },
                {
                    name: "tag_id",
                    type: "uuid",
                },
                {
                    name:"message",
                    type:"varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }

        ]
        }))

        await queryRunner.createForeignKey("compliements",new TableForeignKey({
                name: "fk_user_sender",
                columnNames: ["user_sender"],
                referencedColumnNames: ["id"],
                referencedTableName: "User",
            })
        )

        await queryRunner.createForeignKey("compliements",new TableForeignKey({
            name: "fk_user_receiver",
            columnNames: ["user_receiver"],
            referencedColumnNames: ["id"],
            referencedTableName: "User",
        })
        )

        await queryRunner.createForeignKey("compliements",new TableForeignKey({
            name: "fk_tag",
                columnNames: ["tag_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "tags",
            })        
        )

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliements")
    }

}
