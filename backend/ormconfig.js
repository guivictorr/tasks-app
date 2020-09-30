module.exports = {
   "type": "postgres",
   "host": process.env.HOST,
   "port": process.env.PORT,
   "username": process.env.USERNAME,
   "password": process.env.PASSWORD,
   "database": process.env.DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
