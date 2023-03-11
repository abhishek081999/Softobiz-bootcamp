var status = "Notfilled";
var validte = () => {
  console.log("validte");
  let elementFname = document.getElementById("fname");
  let elementLname = document.getElementById("lastName");
  let elementLocation = document.getElementById("location");
  let elementNationlity = document.getElementById("nationality");
  let elementIntrest = document.getElementById("Intrest");
  let elementEmail = document.getElementById("email");
  let elementPassword = document.getElementById("password");
  let elementMembership = document.getElementById("Membership");
  let elementbirthDate = document.getElementById("birthDate");
  let elementFemale = document.getElementById("female");
  let elementMale = document.getElementById("male");

  let gender = "male";
  if (elementFemale.checked == true) {
    gender = "female";
  } else if (elementMale.checked == true) {
    gender = "male";
  } else {
    gender = "other";
  }

  let nationality = "Indian";
  if (elementNationlity.checked == true) {
    nationality = "Indian";
  } else {
    nationality = "other";
  }
  let data = {
    email: elementEmail.value,
    fname: elementFname.value,
    lname: elementLname.value,
    Intrest: elementIntrest.value,
    nationality: elementNationlity.value,
    password: elementPassword.value,
    Membership: elementMembership.value,
    location: elementLocation.value,
    birthDate: elementbirthDate.value,
    gender: gender,
    nationality: nationality,
  };
  console.log(data);
  let allData = JSON.stringify(data);
  alert(allData);
};

let state = [
  "Maharstra",
  "Punjab",
  "Haryana",
  "Bihar",
  "Karnataka",
  "TamilNadu",
  "Kerala",
  "Kashmir",
];

let onIndiaSelceted = () => {
  console.log("check box selected");
  var elementCheckBox = document.getElementById("nationality");
  if (elementCheckBox.checked == true) {
    if (status == "Notfilled") {
      for (let i = 0; i < state.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(state[i]);
        node.appendChild(textnode);
        document.getElementById("statelist").appendChild(node);
      }
      status = "filled";
    }
  } else {
    // get the reference of stateList
    // remve all items from list
    if (status == "filled") {
      const list = document.getElementById("statelist");
      for (let i = 0; i < state.length; i++) {
        list.removeChild(list.firstElementChild);
        //list.remove();   this will remove  complete list
        status = "Notfilled";
      }
    }
  }
};
