interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static async load(id: number): Promise<DogRecord | unknown> {
        // code to load dog from database
        try {
            const response = await fetch('demoUrl');
            const data = await response.json() as DogRecord;
            return data;
        } catch (err) {
            return err;
        }
    }

    save() {
        // code to save dog to database
    }
}
