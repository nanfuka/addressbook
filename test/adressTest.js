
const chai = require('chai');
const { assert } = chai;
const myaddress = require('../addressData')
// test if the fibonaci of 1 is one
// R =new myaddress.DAO.listOfAddressBooks("deb", 112324)
// myaddress.DAO.listOfAddressBooks
describe('mydress', () => {
        it('It should return an adress book in form of an empty array', () => {
            assert.equal(myaddress.DAO.listOfAddressBooks().length, 0);

        });
    });

    // describe('new entry', () => {
    //     it('It should return an array consisting of keys and values of name and phoneNUmber', () => {

    //         assert.equal(new myaddress.Addresses().newEntry(), {"name": "deb", "phoneNumber": 112324
    //              });

    //     });
    // });


