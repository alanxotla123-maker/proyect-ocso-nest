import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import { isNull } from "util";
@Entity()
export class Product {
       @PrimaryGeneratedColumn("uuid")
        id!: string;
        @Column({type:"text",nullable: true})
        productName!: string;
        @Column({type: "float",nullable: true})
        price!: number;
        @Column({type: "int",nullable: true})
        countSeal!: number;
       //@Column({type: "uuid", nullable: true})

        //provider!: string;
   
}
