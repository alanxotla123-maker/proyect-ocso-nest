import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import { Provider } from "../../providers/entities/provider.entity";
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

        @ManyToOne(() => Provider, (provider) => provider.products,{
              eager: true,
        } )
        @JoinColumn({
            name: "providerid"
        })
        provider!: Provider
   
}
