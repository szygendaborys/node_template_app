const dotenv = require('dotenv');
  // config() will read your .env file, parse the contents, assign it to process.env.
  dotenv.config();

  export default {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.BACKEND_PORT || '8000',
    host: process.env.NODE_HOST || '0.0.0.0',
    mongo:{
        prodKey: process.env.MONGO_PROD_KEY,
        devKey: process.env.MONGO_DEV_KEY
    },
  }