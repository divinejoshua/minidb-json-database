import MiniJsonDB from './MiniJsonDB.mjs';
import path from 'path';

const __dirname = path.resolve();
const db = new MiniJsonDB(path.join(__dirname, 'database.json'));

// Create user records
// db.create('users', { name: '1', age: 25 });
// db.create('users', { name: '2', age: 26 });
// db.create('users', { name: '3', age: 28 });
// db.create('users', { name: '4', age: 27 });
// db.create('users', { name: '5', age: 26 });
// db.create('users', { name: '6', age: 25 });
// db.create('users', { name: '7', age: 24 });
// db.create('users', { name: '8', age: 26 });
// db.create('users', { name: '9', age: 25 });

// Function to return users with age 25 or 26
// const usersWithAge25Or26 = db.findAllByConditions('users', user => user.age === 25 || user.age === 26);
// console.log('Users with age 25 or 26:', usersWithAge25Or26);