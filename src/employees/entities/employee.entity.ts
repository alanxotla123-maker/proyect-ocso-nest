import { Collection, Column, Entity, PrimaryGeneratedColumn , ManyToOne, JoinColumn} from "typeorm";
import { Location } from "../../locations/entities/location.entity";

@Entity('employee')
export class Employee {

@PrimaryGeneratedColumn('uuid')
employeeId!: string;
@Column('text')
name!:string;
@Column('text')
lastName!: string;
@Column('text')
phoneNumber!: string;
@Column('text')
email!:string 
@Column({
    type:"text",
    nullable:true
})
photoUrl!: string;
@ManyToOne(() => Location, (location) => location.employee)
@JoinColumn({
    name: "locationId"
})
location! : Location;

}
