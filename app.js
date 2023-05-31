const recipientName = document.getElementById('recipient-name');
const recipientSurName = document.getElementById("recipient-surname");
const recipientMobile = document.getElementById("recipient-mobile");
const Email = document.getElementById("recipient-Email");


// console.log(Email)
// const email = document.getElementById('')
const signUp = document.getElementById("signup")

// login form
const loginEmail = document.getElementById('email')
// console.log(loginEmail);
const loginPassword = document.getElementById('inputPassword')
// console.log(loginPassword);
// console.log(login);
let date;
let month;
let year;
let gender;


const user = JSON.parse(localStorage.getItem('user')) || []

login.addEventListener('click',loginHandler)

function loginHandler(){

    console.log(loginEmail.value);
    console.log(loginPassword.value);

    if(!loginEmail.value || !loginPassword.value) return alert("please enter your password")
    const userFound = user.filter((user)=>{
        console.log("user email is user found filter",user.Email);
        return Email.value === loginEmail.value
    })
    if(!userFound.length) return alert("Email address already use ,please use another account")
}








signUp.addEventListener('click',signUpHandler)
function signUpHandler(){
    const userFound = user.filter((users)=>{
        return users.Email === loginEmail.value
    })
    if(userFound.length) return alert("email address is already  in use ")

    console.log(recipientMobile);
    if(recipientName.value !=="" && recipientSurName.value !=="" && recipientMobile.value !=="" && Email.value.length < 9) {
    return alert("your password must be in 9 character")


    let objuser = {
        recipientMobile : recipientMobile.value,
        recipientName : recipientName.value,
        recipientPass:recipientPass.value,
        recipientSurName:recipientSurName.value,
        gender,
        date : new Date(`${year}-${month}-${date}`)
    }
    user.push(objuser)
    localStorage.setItem('user',JSON.stringify(user))
    console.log("uses sign up successfully")
} else{
    alert("jaldi jaldi fill kar loo bhi")
}
}

function getDateHandler(d){
    console.log(d ,"doing working")
    date = d
}
function getMonthHandler(m){
    console.log(m ,"doing working")
    month = m
}
function getYearHandler(y){
    console.log(y ,"doing working")
    year = y
}
function getGenderHandler(g){
    console.log(g,"working");
    gender = g

}