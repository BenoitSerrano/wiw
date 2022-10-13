import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Gift {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column("text")
    webLink: string
}
