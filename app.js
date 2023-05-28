const recipientName = document.getElementById('recipient-name');
const recipientSurName = document.getElementById("recipient-surname");
const recipientMobile = document.getElementById("recipient-mobile");
const recipientPass = document.getElementById("recipient-pass");
const signUp = document.getElementById("signup")
let date;
let month;
let year;
let gender;
let user = JSON.parse(localStorage.getItem(user)) || []

signUp.addEventListener('click',signUpHandler)

function signUpHandler(){
    // console.log(recipientMobile);
    if(recipientName.value !=="" && recipientSurName.value !=="" && recipientMobile.value !=="" && recipientPass.value.length < 9) {
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
    alert("uses sign up successfully")
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