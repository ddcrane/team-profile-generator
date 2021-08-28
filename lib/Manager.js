const Employee = require('./Employee');

class Manager extends Employee {
constructor (name) {
    super(name);

    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

getRole() {

    return Manager
};
};

module.exports = Manager;