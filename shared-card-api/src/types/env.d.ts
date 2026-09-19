declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        DB_USER: string;
        DB_HOST: string;
        DB_NAME: shared_card_db
        DB_PASSWORD: string
        DB_PORT: string
    }
}