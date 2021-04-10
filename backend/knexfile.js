module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/development.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/production.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    }
}