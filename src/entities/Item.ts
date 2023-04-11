import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('items')
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    title: string;
    
    @Column({type: 'text'})
    Description: string;

    @Column({type: 'text'})
    Marca: string;
    
    @Column()
    Valor: number;

    @Column({type: 'text'})
    Mecanica: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}