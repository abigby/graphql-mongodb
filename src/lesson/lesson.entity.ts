import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Lesson {
    @ObjectIdColumn()
    _id: string;
    @PrimaryColumn()
    public id: string;
    @Column()
    public name: string;
    @Column()
    public startDate: string;
    @Column()
    public endDate: string;
}

// Type ORM specifics