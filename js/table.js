let table = document.querySelector("#users-table tbody");

const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" },
      { name: "youtube", url: "youtube/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [{ name: "facebook", url: "facebook/georg" }],
    gender: "Male"
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "github", url: "github/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Daniela",
    age: 22,
    email: "andrea@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  }
];

function createTable(usersList) {
  for (let i = 0; i < usersList.length; i++) {
    let userEmail = usersList[i].email;
    if (userEmail.endsWith("@academlo.com")) {
      //COMO VAMOS A ACCEDER A EL CAMPO SOCIAL
      for (let index = 0; index < usersList[i].social.length; index++) {
        console.log(usersList[i].email);
        console.log(
          ` ${usersList[i].name} tiene las siguientes redes sociales ${usersList[i].social[index].url}`
        );
      }
      //CREAR FILAS EN LA TABLA USANDO CREATE ELEMENT
      // let newRow = document.createElement("tr");
      // table.appendChild(newRow);
      // let userName = document.createElement("td");
      // userName.innerText = usersList[i].name;
      // let userEmail = document.createElement("td");
      // userEmail.innerText = usersList[i].email;
      // newRow.appendChild(userName);
      // newRow.appendChild(userEmail);
      //CREAR FILAS EN LA TABLA CON INNERHTML
      // table.innerHTML += `<tr>
      //                     <td>${usersList[i].name}</td>
      //                     <td>${usersList[i].email}</td>
      //                     <td>${usersList[i].age}</td>
      //                     <td>${usersList[i].gender}</td>

      //                   </tr>`;
    }
  }
}

createTable(users);
