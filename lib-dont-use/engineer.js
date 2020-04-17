// Engineer Class
class Engineer{ 
    constructor(name, id, email,gitName){
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = 'Engineer';
        this.github = gitName;
    }

    getName(){return this.name;}
    getId(){return this.id;}
    getEmail(){return this.email;}
    getRole(){return this.position;}
    getGithub(){return this.github;}
}

module.exports = Engineer;