// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var customers = document.querySelector('.customers');
var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];
function abbrState(input){
        
        for(i = 0; i < states.length; i++){
         
          // input = input.replace(/\w\S*/g,input);
        
              if(states[i][0] == input){
                  return(states[i][1]);
              }
          }
}

function createCustomers(people) {
  
  
  for (var i=0; i<people.length; i++) { 
  

  var divElement = document.createElement('div');
   
      divElement.className = "individual";

  var person = people[i];
 
  var imageElement = document.createElement('img');
      imageElement.src = person.picture.large;
      divElement.appendChild(imageElement);

  var nameElement = document.createElement('span');
      nameElement.innerText = person.name.first + " " + person.name.last;
      nameElement.className = "name";
      divElement.appendChild(nameElement);

  var emailElement = document.createElement('div');
      emailElement.innerText = person.email;
      emailElement.className = "email";
      divElement.appendChild(emailElement);

  var addressElement = document.createElement('div');
  // var abbrStateCode = abbrState ([person.location.state]);
      // console.log(abbrStateCode);
      addressElement.innerText = person.location.street + " " + person.location.city + ", " + person.location.state + " " + person.location.postcode;
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
    url: 'https://randomuser.me/api/?nat=us&results=12',
    dataType: 'json',
    success: function (data) {
      console.log(data.results);
      createCustomers(data.results);
    }
  
  });
}
)();


