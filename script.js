class usersclass {
    constructor(){
        this.picture = undefined;
        this.index = undefined;
        this.name = {
            frist: undefined,
            last: undefined,
        },
        this.age = undefined;
        this.phone = undefined;
        this.email = undefined;
    }
}


const API = 'https://next.json-generator.com/api/json/get/NJ-UoW2Xq'
async function creatNewArray(){
    let myfetch = await fetch(`${API}`,{})
    let myjson = await myfetch.json()
    let ArrayOfUsers = []
    for (const jsonusers of myjson) {
        let users = new usersclass();
        users.index = jsonusers.index;
        users.age = jsonusers.age;
        users.picture = jsonusers.picture;
        users.phone = jsonusers.phone;
        users.email = jsonusers.email;
        users.name = jsonusers.name;
        ArrayOfUsers.push(users)
    }
    return ArrayOfUsers

}


let HTML = ''
async function presentObjects() {
    let arrayFetch = await creatNewArray()
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
        HTML += '</div>  '
    }
    mainDive.innerHTML += HTML

    for (const fetchedObjects of arrayFetch) {
        HTML = ''
        document.getElementById(`${fetchedObjects['index']}`).addEventListener('click',() =>{
            HTML += `<div  class='userInfo' id= '${fetchedObjects['index']}' style='width:700px; height:500px;' >  `
        for (const keys in fetchedObjects) {
            if (fetchedObjects[keys] === fetchedObjects["name"]) {
                HTML += `<h1 class='onlyusername'>`
                for (const nameKeys in fetchedObjects["name"]) {
                    HTML += ` ${fetchedObjects["name"][nameKeys]} `
                }
                HTML += `</h1>`
            }
            if (fetchedObjects[keys] === fetchedObjects['picture']) {
                HTML += `<img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 class='onlyusername'>" style='width:200px; height:150px; border-radius: 100px;'>`
            }
            if (fetchedObjects[keys] != fetchedObjects['index'] && fetchedObjects[keys] != fetchedObjects['_id'] && fetchedObjects[keys] != fetchedObjects['name'] && fetchedObjects[keys] != fetchedObjects['picture']) {
                HTML += `<h3 class='onlyusername'>  ${fetchedObjects[keys]}  </h3>  `
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
    let usersObjcets = await creatNewArray()
    mytabele = ''
    mytabele += '<table > <tr> <th> picture </th> <th> age </th> <th> name </th> <th> email </th> <th> phone number </th> </tr>'
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
    <label for="Fname"> First name <input id='firstName' type="text" required></label>
    <br>
    <label for="Lname"> Last name <input type="text" id='lastName' required></label>
    <br>
    <label for="id"> ID <input type="text" required></label>
    <br>
    <label  for="Email"  id='userEmail' onchange="email_validation()"> Email address <input type="email"  id='mainEmail' required></label>
    <br>
    <label  for="conformEmail"> conform Email address <input type="email" id='conformEmail' required></label>
    <br>
    <label for="age"> age <input type="number" required></label>
    <button type='submiteCheck' onclick='formButton()'  id='formButton2'> registr </button> 
    <h3 id='notify_user' class="bg-primary text-light"></h3>
    `
    

    Registrationform += `</form>`
    mainDive.innerHTML = Registrationform
}

function formButton() {
    let firstemail = document.getElementById('mainEmail').value;
    let secoundemail = document.getElementById('conformEmail').value
    if (firstemail === secoundemail) {
       document.getElementById("notify_user").innerHTML = `welcom ${firstName.value} ${lastName.value}`
       setTimeout( () =>{
        document.getElementById("notify_user").innerHTML ='' 
    },10000)

    }
    else {
        document.getElementById("notify_user").innerHTML = `the emails address are not the same`
        setTimeout( () =>{
            document.getElementById("notify_user").innerHTML ='' 
        },5000)
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
   




