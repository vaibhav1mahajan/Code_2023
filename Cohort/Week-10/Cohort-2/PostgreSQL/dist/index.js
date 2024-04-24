"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client("postgres://ovjwtifz:BcuROpKMhcCiG5LFVyjI1Y-idH8D-Cmm@flora.db.elephantsql.com/ovjwtifz");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log("connected to db successfully");
        const userTable = `CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;
        const result = yield client.query(userTable);
        console.log("Table created successfully");
    });
}
// createTable();
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("db connected successfully");
            //  const insert = `INSERT INTO users (email, username, password) VALUES ("emai2123l@gmail.com", "ema123il123", "123546");`
            const insert = `INSERT INTO users (email, username, password) VALUES ('sdfsdfdf', 'sdfss@exasdfsdmple.com', 'user_password');`;
            //  const insert = `INSERT INTO users (email, username, password) VALUES ('sdf', 'sdfss@example.com', 'user_password');`
            // INSERT INTO users (username, email, password)
            //         VALUES ('username_here', 'user@example.com', 'user_password');
            const res = yield client.query(insert);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// insertData();
function addresses() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const addressTable = `CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        id_2 VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`;
        yield client.query(addressTable);
        console.log('address table created');
        return;
    });
}
// addresses();
function insertDataIntoAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `INSERT INTO addresses (user_id, city, country, id_2, street, pincode)
    VALUES (1, 'New Yor k', 'UK', 1234,  '123 Broadway St', '10001');`;
        yield client.query(query);
        console.log('added');
        // await client.query(`INSERT INTO users (username , password , email) VALUES ('vaibhav1mahajan' , 'fjlasdjfl',email1@gmail.com )`)
        return;
    });
}
// insertDataIntoAddress();
function addresses2() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log(123);
        const addressTable = `CREATE TABLE addresses2 (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        id_2 VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(uid) ON DELETE CASCADE
    );`;
        yield client.query(addressTable);
        console.log('address table created');
        return;
    });
}
// addresses2();
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log("connected");
        const query = `SELECT city , country , street
    FROM addresses
    WHERE user_id = 1`;
        const result = yield client.query(query);
        console.log(result);
    });
}
fetchData();
