// Engineer Class
class Engineer{ 
    constructor(name, id, email, ){
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = 'Employee';
    }

    getName(){return this.name;}
    getId(){return this.id;}
    getEmail(){return this.email;}
    getRole(){return this.position;}

}

module.exports = Engineer;