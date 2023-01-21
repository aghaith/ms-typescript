"use strict";
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static async load(id) {
        // code to load dog from database
        try {
            const response = await fetch('demoUrl');
            const data = await response.json();
            return data;
        }
        catch (err) {
            return err;
        }
    }
    save() {
        // code to save dog to database
    }
}
