import fs from 'fs';

class MiniJsonDB {
    constructor(filePath) {
        this.filePath = filePath;
        this.loadData();
    }

    loadData() {
        if (fs.existsSync(this.filePath)) {
            try {
                const rawData = fs.readFileSync(this.filePath, 'utf-8');
                this.data = rawData ? JSON.parse(rawData) : {};
            } catch (error) {
                console.error('Error loading data:', error);
                this.data = {};
            }
        } else {
            this.data = {};
            this.saveData();
        }
    }

    saveData() {
        const jsonData = JSON.stringify(this.data, null, 2);
        fs.writeFileSync(this.filePath, jsonData);
    }

    generateId() {
        return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    }

    create(collection, record) {
        if (!this.data[collection]) {
            this.data[collection] = [];
        }
        const newRecord = { id: this.generateId(), ...record };
        this.data[collection].push(newRecord);
        this.saveData();
        return newRecord;
    }

    read(collection, query = {}) {
        if (!this.data[collection]) {
            return [];
        }
        return this.data[collection].filter(record => {
            return Object.keys(query).every(key => record[key] === query[key]);
        });
    }

    update(collection, id, updatedRecord) {
        if (!this.data[collection]) {
            return null;
        }
        const recordIndex = this.data[collection].findIndex(record => record.id === id);
        if (recordIndex === -1) {
            return null;
        }
        this.data[collection][recordIndex] = {
            ...this.data[collection][recordIndex],
            ...updatedRecord
        };
        this.saveData();
        return this.data[collection][recordIndex];
    }

    delete(collection, id) {
        if (!this.data[collection]) {
            return false;
        }
        const recordIndex = this.data[collection].findIndex(record => record.id === id);
        if (recordIndex === -1) {
            return false;
        }
        this.data[collection].splice(recordIndex, 1);
        this.saveData();
        return true;
    }

    findOne(collection, query) {
        return this.read(collection, query)[0] || null;
    }

    findAll(collection, query = {}) {
        return this.read(collection, query);
    }

    findAllByQuery(collection, query) {
        return this.read(collection, query);
    }

    findAllByConditions(collection, conditions) {
        if (!this.data[collection]) {
            return [];
        }
        return this.data[collection].filter(record => conditions(record));
    }
}

export default MiniJsonDB;
