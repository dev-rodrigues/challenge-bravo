import { getRepository, Repository } from "typeorm";

import ICoinRepository from "../../repository/ICoinRepository";
import CoinModel from "./models/CoinModel";


class CoinDataSource implements ICoinRepository {

    private ormRepository: Repository<CoinModel>;

    constructor() {
        this.ormRepository = getRepository(CoinModel);
    }

}

export default CoinDataSource;