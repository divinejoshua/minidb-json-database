<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>MiniJsonDB</h1>

<p>MiniJsonDB is a lightweight JSON-based database for Node.js projects. It provides basic CRUD operations and allows for flexible querying of data.</p>

<h2>Installation</h2>

<p>To use MiniJsonDB, simply download or clone the repository and import the class into your project.</p>

<pre><code>git clone &lt;repository-url&gt;
</code></pre>

<h2>Usage</h2>

<h3>Importing the MiniJsonDB</h3>

<p>To use MiniJsonDB in your project, import it as follows:</p>

<pre><code>import MiniJsonDB from './MiniJsonDB.mjs';
import path from 'path';

const __dirname = path.resolve();
const db = new MiniJsonDB(path.join(__dirname, 'database.json'));
</code></pre>

<h3>Creating Records</h3>

<p>You can create new records in a specified collection using the <code>create</code> method. This method generates a unique ID for each record and saves it to the JSON file.</p>

<pre><code>const newUser = db.create('users', { name: 'Alice', age: 25 });
</code></pre>

<h3>Reading Records</h3>

<p>You can read records from a collection using the <code>read</code> method. This method supports filtering by query.</p>

<pre><code>const allUsers = db.read('users');
const usersNamedAlice = db.read('users', { name: 'Alice' });
</code></pre>

<h3>Updating Records</h3>

<p>To update an existing record, use the <code>update</code> method. This method requires the collection name, the record ID, and an object with the updated fields.</p>

<pre><code>const updatedUser = db.update('users', 'record-id', { age: 26 });
</code></pre>

<h3>Deleting Records</h3>

<p>You can delete a record by its ID using the <code>delete</code> method.</p>

<pre><code>const isDeleted = db.delete('users', 'record-id');
</code></pre>

<h3>Finding a Single Record</h3>

<p>To find a single record that matches a query, use the <code>findOne</code> method.</p>

<pre><code>const user = db.findOne('users', { name: 'Alice' });
</code></pre>

<h3>Finding All Records with a Query</h3>

<p>To find all records that match a query, use the <code>findAll</code> method.</p>

<pre><code>const usersNamedAlice = db.findAll('users', { name: 'Alice' });
</code></pre>

<h3>Finding All Records with Complex Conditions</h3>

<p>For more complex queries, you can use the <code>findAllByConditions</code> method. This method accepts a function that defines the conditions.</p>

<pre><code>const usersWithAge25Or26 = db.findAllByConditions('users', user =&gt; user.age === 25 || user.age === 26);
</code></pre>

<h3>Example Usage</h3>

<p>Here is an example script demonstrating the usage of the above methods:</p>

<pre><code>import MiniJsonDB from './MiniJsonDB.mjs';
import path from 'path';

const __dirname = path.resolve();
const db = new MiniJsonDB(path.join(__dirname, 'database.json'));

// Create user records
db.create('users', { name: 'Alice', age: 25 });
db.create('users', { name: 'Bob', age: 30 });
db.create('users', { name: 'Mike', age: 28 });
db.create('users', { name: 'Alice', age: 35 });
db.create('users', { name: 'Alice', age: 25 });

// Find all users named Alice who are 25 years old
const allAlices = db.findAllByQuery('users', { name: 'Alice', age: 25 });
console.log('All Alices aged 25:', allAlices);

// Find users with age 25 or 26
const usersWithAge25Or26 = db.findAllByConditions('users', user =&gt; user.age === 25 || user.age === 26);
console.log('Users with age 25 or 26:', usersWithAge25Or26);
</code></pre>

<h2>Notes</h2>

<ul>
    <li>The JSON file specified in the constructor will be created if it does not exist.</li>
    <li>Ensure the JSON file has valid JSON content. An empty file should contain <code>{}</code>.</li>
    <li>This implementation is intended for small to medium-sized datasets. For larger datasets, consider using a more robust database solution.</li>
</ul>

<h2>License</h2>

<p>This project is licensed under the MIT License.</p>
</body>
</html>
