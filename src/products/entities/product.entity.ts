import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
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
       //@Column({type: "uuid", nullable: true})

        //provider!: string;
        @ManyToOne(() => Provider, (provider) => provider.products,{
              //  eager: true,
        } )
        provider!: Provider
   
}
