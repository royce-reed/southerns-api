declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      ADDRESS: string;
      KEY: string;
      JWT_SECRET: string;
    }
  }
}

export {};
