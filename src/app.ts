import 'dotenv/config';
import { bdConnection } from './database/database';
import { server } from './server/Server';

bdConnection();

server.listen(process.env.PORT, () => console.log('App Rodando!'));