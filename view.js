// const addre = require('./addressData')
// addref = new addre.DAO()
var addressList = [];
function ReadInput() {
    name = document.getElementById("name").value
    phonenumber = document.getElementById("number").value
    var newlist = addressList.push({ name: name, phonenumber: phonenumber })

    console.log(addressList);
    localStorage.setItem('token', addressList)
}

function read() {
    token = localStorage.getItem('token');

    let tabletitle = `<table id="allparcels"><tr>
                
    <th>Name</th>
    <th>Phone number</th>
</tr>`;

    document.getElementById("addresses").innerHTML = tabletitle;
    console.log(token)
    
}

