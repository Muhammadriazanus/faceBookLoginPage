const firstName = document.getElementById("recipient-name");
const surName = document.getElementById("recipient-surname");
const passwordsignUp = document.querySelector("#recipient-password");
const signupEmail = document.querySelector("#recipient-Email");
const signup = document.querySelector("#signup")
// console.log(signup);
//  mari login ki functionality chal rahi ha ya sa

const loginEmail = document.querySelector("#email");

const loginPassword = document.querySelector("#inputPassword");

const loginBtn = document.querySelector("#login")
console.log(loginBtn);
let date;
let  year;
let  month;
let gender;

const  users = JSON.parse(localStorage.getItem("users"))||[]
console.log(users);


loginBtn.addEventListener("click",loginHandler)

function loginHandler(){
    const UserFound = users.filter((user)=>{
        return user.signupEmail === loginEmail.value
    })
    console.log(UserFound ,"user found  in login");

    if(!UserFound.length) return alert("this user is not registor please create your account ")
    console.log(loginPassword.value);
    // console.log(UserFound.passwordsignUp);


    if(UserFound[0].passwordsignUp == loginPassword.value){
        alert("user is logging in")

        localStorage.setItem('isloggedInUser',JSON.stringify(UserFound[0]))

        window.location.href = "./dashboard/index.html"
    }
    else{
        alert("password is in correct ")
    }
}

// addeventlistner of sign up  function

signup.addEventListener("click",signUpHandler)

function signUpHandler(){
    console.log(signupEmail.value)
    if(firstName.value !== "" && surName.value !== "" && passwordsignUp.value!== "" && signupEmail.value !== "" && Date !== "undefined" && month !== "undefined" && year !== "undefined " && gender !=="undefined" ){
        // return alert("please write the requriment of the  form")
        if(passwordsignUp.value.length < 9) 
            return alert("password must be cantain i 9 character ")

            const objUser = {
                firstName : firstName.value,
                surName : surName.value,
                passwordsignUp : passwordsignUp.value,
                signupEmail:signupEmail.value,
                date :new Date(`${year} ${month} ${date}`),
                gender

            }
            users.push(objUser)
            localStorage.setItem('users',JSON.stringify(users))
            alert("User sign up sucessfully")

            firstName.value = ""
            surName.value = ""
            passwordsignUp.value = ""
            signupEmail.value = ""
            
        }else{
            alert("insaan ban k sari field fill up karlo")

        }
        
    }
    

function getDateHandler(d){
    console.log(d ,"datehandler is working ");
    date = d

}
function getYearHandler(y){
    console.log(y,"year is working ");
    year  = y
}

function getMonthHandler(m){
    console.log(m,"month is working ");
    month = m
}
function getGenderHandler(g){
    console.log(g,"gender is working ");
}