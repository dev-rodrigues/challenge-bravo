import { createConnection } from 'typeorm';

class ConnectionDatabase {

    public async connect() {
        let reties = 5;

        while (reties) {
            try {
                await createConnection();
                break;
            } catch (error) {
                reties--;
                console.log('failure to connect to database, retrying...');
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
    }
}

export default ConnectionDatabase;