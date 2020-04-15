class Manager {
    constructor(name, id, email, office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = 'Manager';
    }
    
    getName(){return this.name;}
    getId(){return this.id;}
    getEmail(){return this.email;}
    getRole(){return this.position;}
}

module.exports = Manager;