import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class NotesEntity{
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({type: "longtext"})
    notes!: string;
}
