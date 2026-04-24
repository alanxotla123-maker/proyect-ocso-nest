import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity";
import { RegionsController } from "../../regions/regions.controller";
import { Region } from "../../regions/entities/region.entity";
import { Employee } from "../../employees/entities/employee.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId!: number;
    @ApiProperty({
        default: "Location"
    })
    @Column('text')
    locationName!: string;
    @ApiProperty({
        default: "Location Address"
    })
    @Column('text')
    locationAddress!: string;

    @ApiProperty({
        default: [12, 123]
    })
    @Column('simple-array')
    locationLatLng!: number[]

    @OneToOne(() => Manager, {
        eager: true,
    })
    @JoinColumn({
        name: "mangerId"
    })

    manager!: Manager
    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({
        name: "regionId"
    })
    region!: Region
    @OneToMany(() => Employee, (employee) => employee.location)
    employee!: Employee[]


}
