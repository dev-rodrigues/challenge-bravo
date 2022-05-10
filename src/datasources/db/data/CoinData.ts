import {EntityRepository, Repository} from "typeorm";
import CoinModel from "../models/CoinModel";

@EntityRepository(CoinModel)
class CoinData extends Repository<CoinModel> {

}

export default CoinData;