import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PrimaryColumn } from "typeorm/browser";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId!: string;
    @Column('text')
    userEmail!: string


    @Column('text')
    userPassword!: string

    @Column('simple-array', {
        default: ['Employee']
    })
    userRoles!: string[];
}