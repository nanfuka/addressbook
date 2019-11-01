const address = require('./addres')
var addressesList = new Array();

class DAO{
    static createNewAddress(name, phoneNumber){
        const add = new address.Address(name, phoneNumber);
        DAO.listOfAddressBooks().push(add);
        return "saved"
    }

    static updateAddressBook(index, name, phoneNumber){
        DAO.listOfAddressBooks()[index] = new address.Address(name,phoneNumber);
    }

   static listOfAddressBooks () {
        return addressesList;

    }

}
module.exports = {DAO}

// DAO.createNewAddress('deb','iiiii');
// console.log(DAO.listOfAddressBooks())
// DAO.updateAddressBook(0,'jacob', 'dfghjknl');
// console.log(DAO.listOfAddressBooks())
// console.log(DAO.listOfAddressBooks("deb", 112324))