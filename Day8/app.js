
//external js code
var count = 56;
count++;
console.log("hello");
var person={
    "firstname": "Rajeev",
    "lastname":"kumar",
    "contacterson":"9882437123",
    "email":"rajeev.kumar@gmail.com"
};
var str__person=JSON.stringify(person);
//alert(str__person);

//dhtml

var showme=function(){
    alert("i am completely awake. purey hosh awas me");
}

var validate=function(){
    alert("login button is clicked");
    //read content of email and password test boxes
    //DOM (Document Object Model)tree
}
//get value of element whose id =email

let elementEmail=document.getElementById("email")
let email=elementEmail.value;

let elementpassword=document.getElementById("password")//get value of element whose id =password
let password = elementpassword.value;

let result= email +"  "+ password;

//show email and password content to paragraph element
//whose id="status"
let elementParagraph=document.getElementById("status");
elementParagraph.innerHTML=result;