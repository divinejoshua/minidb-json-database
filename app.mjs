import MiniJsonDB from './MiniJsonDB.mjs';
import path from 'path';


// Get File Path and initialize filepath with MiniJsonDB
const __dirname = path.resolve();
const db = new MiniJsonDB(path.join(__dirname, 'database.json'));

// Create records
const user1 = db.create('users', { name: 'Alice', age: 25 });
const user2 = db.create('users', { name: 'Bob', age: 25 });
const user3 = db.create('users', { name: 'Mike', age: 26 });
const user4 = db.create('users', { name: 'Alice', age: 27 });
const user5 = db.create('users', { name: 'Alice', age: 25 });
const user6 = db.create('users', { name: 'Rick', age: 30 });

console.log('Created Users:', user1, user2, user3, user4, user5, user6);

// Read records
const users = db.findAll('users');
console.log('All Users:', users);

//Specific records
const specificUser = db.findOne('users', { name: 'Alice' });
console.log('Specific User:', specificUser);

// Find all by query
const allAlices = db.findAll('users', { name: 'Alice'});
console.log('All users named Alice:', allAlices);

// Find all by query also find with Multiple Fields (AND clause)
const allAlicesWithAge = db.findAll('users', { name: 'Alice',  age : 25});
console.log('All users named Alice with specific Age:', allAlicesWithAge);

// Function to return users with age 25 or 26 (WHERE clause)
const usersWithAge25Or26 = db.findAllByConditions('users', user => user.age === 25 || user.age === 26);
console.log('Users with age 25 or 26:', usersWithAge25Or26);

// Update a record
const updatedUser = db.update('users', user1.id, { age: 26 });
console.log('Updated User:', updatedUser);

// Delete a record
const deleteSuccess = db.delete('users', user2.id);
console.log('Delete Success:', deleteSuccess);

// Final state of users
console.log('Final Users:', db.findAll('users'));