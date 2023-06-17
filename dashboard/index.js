// function foo(abc){
//     console.log(abc);
//     setTimeout(function(){
//         obj = {
//             names : "Muhammad",
//             email : "muhammadanas@gmail.com",

//         }
//         abc(obj)
//     },2000)
// }

// function abc (data){
//     console.log(data);
// }

// foo(abc)



// function foo(abc){
//     console.log(abc);
//     setTimeout(function(){
//         Object = {
//             names : "muhammad",
//             eamil: "muhammad@gamil.xom",
//         }
//         abc(Object)
//     })
// }

// function abc (data){
//     console.log(data);

// }

// foo(abc)

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(data){
    return data.json()
})
.then(function(data){
        console.log("data",data);
    })
    .catch(function(err){
        console.log("error",err);
    })

// function abc(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             Object = {
//                 names : "muhammad",
//                 eamil: "muhammad@gamil.xom",
//             }
//             resolve(Object)
//         },3000)

//     })
     
// }
// abc()
// .then(function(data){
//     console.log("data",data);
// })
// .catch(function(err){
//     console.log("error",err);
// })