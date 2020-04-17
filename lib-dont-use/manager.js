// Manager Data Class
class Manager {
    constructor(name, id, email, office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = 'Manager';
        this.officeNumber = office;
    }
    
    getName(){return this.name;}
    getId(){return this.id;}
    getEmail(){return this.email;}
    getRole(){return this.position;}
    getOfficeNumber(){return this.officeNumber}
}

//export so this class can be inclulded in other files
module.exports = Manager;