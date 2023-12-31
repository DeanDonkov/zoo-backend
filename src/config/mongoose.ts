import mongoose from 'mongoose';

import logger from './../utils/logger';
import { DB } from './config';

const qopts = '';

const options: mongoose.ConnectOptions = {
};

if (DB.CA_CERT) {
  options.tls = true;
  options.tlsCAFile = DB.CA_CERT;
}

mongoose.set('strictQuery', true);

const mongoUri = DB.URI
  ? DB.URI : DB.USERNAME && DB.PASSWORD
  ? `mongodb+srv://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}/${DB.NAME}${qopts}`
    : `mongodb://${DB.HOST}:${DB.PORT}/${DB.NAME}`;

/**
 * @summary Connects the app to the DB Server
 * @description Stops the app on error and starts the server on success
 * @param callbackFunc The Express app
 * @param disconnect Disconnect the db after executing the callback function
 */
export function connectDB(callbackFunc: () => Promise<void>, disconnect: boolean): void {
  mongoose.connect(mongoUri, options, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const db = mongoose.connection;

  db.on('error', () => {
    console.error.bind(console, 'connection error:');
    process.kill(process.pid, 'SIGTERM');
  });

  db.once('open', async () => {
    logger.info(`DB ${DB.NAME} connected successfully.`);

    await callbackFunc();

    if (disconnect) {
      db.close().catch((err) => {
        logger.error(err);
      });
      logger.info('DB disconnected.');
    }
  });
}

export default { connectDB };
