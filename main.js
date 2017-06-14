// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var customers = document.querySelector('.customers');

function createCustomers(people) {
  
  
  for (var i=0; i<people.length; i++) { 
  

  var divElement = document.createElement('div');
   
      divElement.className = "individual";

  var person = people[i];
 
  var imageElement = document.createElement('img');
      imageElement.src = person.picture.large;
      divElement.appendChild(imageElement);

  var nameElement = document.createElement('div');
      nameElement.innerText = person.name.first + " " + person.name.last;
      nameElement.className = "name";
      divElement.appendChild(nameElement);

  var emailElement = document.createElement('div');
      emailElement.innerText = person.email;
      emailElement.className = "email";
      divElement.appendChild(emailElement);

  var addressElement = document.createElement('div');
      addressElement.innerText = person.location.street + " " + person.location.city + "," + " " + person.location.state + " " + person.location.postcode;
      addressElement.className = "address";
      divElement.appendChild(addressElement);

  var phoneElement = document.createElement('div');
      phoneElement.innerText = person.phone;
      phoneElement.className = "phone";
      divElement.appendChild(phoneElement);

  var idElement = document.createElement('div');
      idElement.innerText = person.id.value;
      idElement.className = "id";
      divElement.appendChild(idElement);

      customers.appendChild(divElement);
  }
}

(function () {
  'use strict';

  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {
      console.log(data.results);
      createCustomers(data.results);
    }
  
  });
}
)();


