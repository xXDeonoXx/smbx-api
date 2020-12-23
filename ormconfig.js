const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = [
  {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
      `./${isDevelopment ? 'src' : 'dist'}/database/migrations/*{.ts,.js}`,
    ],
    cli: {
      migrationsDir: `./${isDevelopment ? 'src' : 'dist'}/database/migrations`,
    },
    entities: [`./${isDevelopment ? 'src' : 'dist'}/models/**/*{.ts,.js}`],
    logging: process.env.DB_LOGGING_LEVEL.split(','),
  },
  {
    name: 'seed',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
      `./${isDevelopment ? 'src' : 'dist'}/database/seeds/*{.ts,.js}`,
    ],
    cli: {
      migrationsDir: `./${isDevelopment ? 'src' : 'dist'}/database/seeds`,
    },
    entities: [`./${isDevelopment ? 'src' : 'dist'}/models/**/*{.ts,.js}`],
    logging: process.env.DB_LOGGING_LEVEL.split(','),
  },
  {
    name: 'test',
    type: 'sqlite',
    database: 'test.db',
    dropSchema: true,
    entities: ['./src/models/**/*.ts'],
    synchronize: true,
  },
];
