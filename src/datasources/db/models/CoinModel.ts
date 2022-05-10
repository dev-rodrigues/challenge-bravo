import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('COIN')
class CoinModel {

    @PrimaryGeneratedColumn('increment')
    id: number|null;

    @Column()
    code: string;

    @Column()
    codeIn: string;

    @Column()
    name: string;

    @Column()
    high: string;

    @Column()
    low: string;

    @Column()
    varBid: string;

    @Column()
    pctChange: string;

    @Column()
    bid: string;

    @Column()
    ask: string;

    @Column()
    timestamp: number;

    @CreateDateColumn({ name: 'created_at' })
    create_date: Date|null;
}

export default CoinModel;
