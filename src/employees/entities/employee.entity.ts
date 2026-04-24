import { Collection, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Location } from "../../locations/entities/location.entity";
import { User } from "../../auth/entities/user.entity";

@Entity('employee')
export class Employee {

    @PrimaryGeneratedColumn('uuid')
    employeeId!: string;
    @Column('text')
    employeeName!: string;
    @Column('text')
    employeeLastName!: string;
    @Column('text')
    employeePhoneNumber!: string;
    @Column('text', { unique: true })
    employeeEmail!: string
    @Column({
        type: "text",
        nullable: true
    })
    employeePhoto!: string;
    @ManyToOne(() => Location, (location) => location.employee)
    @JoinColumn({
        name: "locationId"
    })
    location!: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: "userId"
    })
    user!: User;
}
