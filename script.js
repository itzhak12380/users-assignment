let HTML = ''
async function presentObjects() {
    let serverFetch = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let arrayFetch = await serverFetch.json()
    for (const fetchedObjects of arrayFetch) {
        HTML += `<div  class ='usersInfo card' id= '${fetchedObjects['index']}' >  `
        for (const keys in fetchedObjects) {
            if (fetchedObjects[keys] === fetchedObjects["name"]) {
                HTML += `<h2>`
                for (const nameKeys in fetchedObjects["name"]) {
                    HTML += ` ${fetchedObjects["name"][nameKeys]} `
                }
                HTML += `</h2>`
            }
            if (fetchedObjects[keys] === fetchedObjects['picture']) {
                HTML += `<img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500>">`
            }
            if (fetchedObjects[keys] != fetchedObjects['index'] && fetchedObjects[keys] != fetchedObjects['_id'] && fetchedObjects[keys] != fetchedObjects['name'] && fetchedObjects[keys] != fetchedObjects['picture']) {
                HTML += `<h5>  ${fetchedObjects[keys]}  </h5>  `
            }
        }
        HTML += '</div> '
    }
    mainDive.innerHTML += HTML

    for (const fetchedObjects of arrayFetch) {
        HTML = ''
        document.getElementById(`${fetchedObjects['index']}`).addEventListener('click',() =>{
            HTML += `<div  class ='usersInfo' id= '${fetchedObjects['index']}' >  `
        for (const keys in fetchedObjects) {
            if (fetchedObjects[keys] === fetchedObjects["name"]) {
                HTML += `<h1>`
                for (const nameKeys in fetchedObjects["name"]) {
                    HTML += ` ${fetchedObjects["name"][nameKeys]} `
                }
                HTML += `</h1>`
            }
            if (fetchedObjects[keys] === fetchedObjects['picture']) {
                HTML += `<img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500>">`
            }
            if (fetchedObjects[keys] != fetchedObjects['index'] && fetchedObjects[keys] != fetchedObjects['_id'] && fetchedObjects[keys] != fetchedObjects['name'] && fetchedObjects[keys] != fetchedObjects['picture']) {
                HTML += `<h3>  ${fetchedObjects[keys]}  </h3>  `
            }
        }
        HTML += '</div> '
        mainDive.innerHTML = HTML
    })
        }
        
    
}
presentObjects()

let mytabele = ''
async function creatObjectTabel() {
    let fetchusers = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq')
    let usersObjcets = await fetchusers.json()
    mytabele = ''
    mytabele += '<table> <tr> <th> picture </th> <th> age </th> <th> name </th> <th> email </th> <th> phone number </th> </tr>'
    for (const ichObject of usersObjcets) {
        mytabele += `<tr>`
        for (const keys in ichObject) {
            if (ichObject[keys] === ichObject['name']) {
                mytabele += `<td>`
                for (const nameKeys in ichObject['name']) {
                    mytabele += ` ${ichObject['name'][nameKeys]}`
                }
            }
            if (ichObject[keys] === ichObject['picture']) {
                mytabele += `<td> <img src = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500>"> </td>`
            }
            if (ichObject[keys] != ichObject['_id'] && ichObject[keys] != ichObject['picture'] && ichObject[keys] != ichObject['name'] && ichObject[keys] != ichObject['index']) {
                mytabele += ` <td> ${ichObject[keys]}</td>  `
            }
        }
        mytabele += `</tr>`
    }
    mytabele += '</table>'
    mainDive.innerHTML = mytabele
}

let Registrationform = ''
function userRegistration() {
    Registrationform = `<form id ='registrstyle'>
    <label for="Fname"> First name <input id='firstName' type="text"></label>
    <br>
    <label for="Lname"> Last name <input type="text" ></label>
    <br>
    <label for="id"> ID <input type="text"></label>
    <br>
    <label  for="Email" id='userEmail' onchange="email_validation()"> Email address <input type="text" id='mainEmail'></label>
    <br>
    <label  for="conformEmail"> conform Email address <input type="text" id='conformEmail'></label>
    <br>
    <label for="age"> age <input type="number"></label>
    <button type='submiteCheck' onclick='formButton()'  id='formButton2'> registr </button> `

    Registrationform += `</form>`
    mainDive.innerHTML = Registrationform
}

function formButton() {
    let firstemail = document.getElementById('mainEmail').value;
    let secoundemail = document.getElementById('conformEmail').value
    if (firstemail === secoundemail) {
        alert('welcome new user');

    }
    else {
        alert('your email address are not the same');
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
   




