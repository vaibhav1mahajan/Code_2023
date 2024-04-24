import { Client } from "pg";

   
const client = new Client("postgres://ovjwtifz:BcuROpKMhcCiG5LFVyjI1Y-idH8D-Cmm@flora.db.elephantsql.com/ovjwtifz")



async function createTable(){
    await client.connect() ;
    console.log("connected to db successfully")
    const userTable =  `CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
    const result = await client.query(userTable)
    console.log("Table created successfully")
}
// createTable();

async function insertData(){
    try {
        
        await client.connect();
        console.log("db connected successfully");
        //  const insert = `INSERT INTO users (email, username, password) VALUES ("emai2123l@gmail.com", "ema123il123", "123546");`
         const insert = `INSERT INTO users (email, username, password) VALUES ('sdfsdfdf', 'sdfss@exasdfsdmple.com', 'user_password');`
        //  const insert = `INSERT INTO users (email, username, password) VALUES ('sdf', 'sdfss@example.com', 'user_password');`
        // INSERT INTO users (username, email, password)
//         VALUES ('username_here', 'user@example.com', 'user_password');
        const res = await client.query(insert);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// insertData();

async function addresses(){
    await client.connect();
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
    );`
    await client.query(addressTable);
    console.log('address table created');
    return;
}
// addresses();
async function insertDataIntoAddress(){
    await client.connect();
    const query = `INSERT INTO addresses (user_id, city, country, id_2, street, pincode)
    VALUES (1, 'New Yor k', 'UK', 1234,  '123 Broadway St', '10001');`
    await client.query(query);
    console.log('added');
    // await client.query(`INSERT INTO users (username , password , email) VALUES ('vaibhav1mahajan' , 'fjlasdjfl',email1@gmail.com )`)
    return;

}   
// insertDataIntoAddress();
async function addresses2(){
    await client.connect();
    await client.copyFrom(`UPDATE INTO users SET username = email where user_id = '1'`)
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
    );`
    await client.query(addressTable);
    console.log('address table created');
    return;
}
// addresses2();

async function fetchData(){
    await client.connect();
    console.log("connected");
    const query = `SELECT city , country , street
    FROM addresses
    WHERE user_id = 1`;
    const query2 = `SELECT country, street , content 
    FROM users 
    WHERE user_id = 2`;
    const query3 = `SLECET `
    const result = await client.query(query);
    console.log(result);
}

fetchData();


