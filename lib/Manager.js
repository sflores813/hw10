// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, ID, email, OfficeNumber) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.OfficeNumber = OfficeNumber
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }
    getOfficeNumber() {
        return this.OfficeNumber
    }

    getRole() {
        return "Manager";
    }
}
module.exports = Manager;