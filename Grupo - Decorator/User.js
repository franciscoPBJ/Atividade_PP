class User {
 
    constructor(id, name, age) {
 
        this.id = id;
        this.name = name;
        this.age = age;
 
    }
 
    getID(){
        return this.id;
    }
 
    getName(){
        return this.name;
    }
 
    getAge(){
        return this.age;
    }
 
    toJSON(){
 
        return {
            id: this.getID(),  
            name: this.getName(),  
            age: this.getAge()  
        };
 
    }
 
}
 
exports = User;
