

// //       function my_function(val){

// const { promise, resolve, reject } = require("q")

// //
//   //          document.getElementById('demo').innerHTML=val*val
//     //    }
//       //  my_function(10)

// //*
    



    
//         let x = function(){

//             alert("Hello");

//         }
//         let y = x;





    
//         var myfunction = new Function('a','b','return a+b');
//         var g = myfunction(2,2);
//         document.getElementById('demo').innerHTML ='the sum this : '+ g





    





// function product(a,b){

//     return a+b;

// }
// //*

// let z = product(5,2)
// document.getElementById('demo').innerHTML = z

// </script>




// // var body= 'return a+b';
// // var cirlce= new Function('a,b',body);
// //alert(cirlce(5,15))





// </script>




// const myfunc = (a,b,c) => {return a*b*c}
// let pros= myfunc(1,2,5)
// document.getElementById('demo').innerHTML= pros




// function* generatefunction(){

//     yield 1;
//     yield 2;
//     return 3;


// }


// let generator = generatefunction();
// let one = generator.next();
// let two = generator.next();
// let three = generator.next();
// alert(JSON.stringify(one));
// alert(JSON.stringify(two));
// alert(JSON.stringify(three));



// let x = 5, y=6 , z=7;
// console.log(eval('x+y'));
// console.log(eval(2));


// var a= 20;
// function myfunc(){
// var b 
// }


// var a = 10;

// function fristfunc(){
//     var b =20;
//     function secondfunc(){
//         var c = a+b;
//         return c;
//     }
//     return  secondfunc();
// }

// var sum = fristfunc()

// document.getElementById('demo').innerHTML = ('this sum : '+ sum)




// promise
// let car = new Promise(function(resole,reject){
//     feal_tank = true;
//     if(feal_tank){
//         resole()
//     }else{
//         reject()
//     }

// })


// car.then(function(){
//     document.getElementById('demo').innerHTML = 'full fael Im Happy'   
// }).catch(function(){
//     document.getElementById('demo').innerHTML = 'not full fael not Happy'   
    
// })



// let empty_tank = function(){
//     return new Promise(function(resolve,reject){
//         resolve('the car dosent have enogh fuel.')
//     })
// }

// let engine = function(msg){
//     return new Promise(function(resolve,reject){
//         resolve(msg +'the car engine is over heating . ')

//     })
// }
// let travel = function(msg){
//     return new Promise(function(resolve,reject){
//         resolve(msg +'the car is not safe for travel.')
//     })
// }
// empty_tank().then(function(result){
//     return engine(result);
// }).then(function(result){
//     return travel(result);
// }).then(function(result){
//     console.log('done:  ' + result)
// })


// let result = function(score){
//     return new Promise(function(resolve, reject) {
//         console.log("calculation result...")
//         if (score>=50){
//             resolve('...ongratulation!  you have passed')

//         }else{
//             reject('you have failed !')
//         }
//     })
// }


// let grade = function(responsive){
//     return new Promise(function(resolve,reject){
//         console.log('calculation your grade...')
//         resolve('your grade is a '+ responsive)
//     })
// }

// // result(80).then(responsive  =>{
// //     console.log('result resivew')
// //     return grade(responsive);
// // }).then(finallgrade =>{
// //     console.log('final');
// // }).catch(err => {
// //     console.log(err)
// // })

// async function calculations(){
//     try{
//     const response = await result(5)
//     console.log('result resive...')
//     const finallgrade = await grade(response)
//     console.log(finallgrade)
// }
// catch(err){
//     console.log(err)
// }
// }
// calculations()

/// key word javascript
// var value = 50;

// function my_function(){
//     var value = 100;
//     alert('value :'+ value)
//     alert("this value : "+ this.value)
// }
// my_function()

// const random = {
//     name:'totrailas',
//     video: ['javascript','this','keyword'],
//     info(){
//         this.video.forEach(function(tag){
//             console.log(this.name,tag)

//         },this )
//         }
// };
// random.info()
// const random = {
//     name:'totrailas',
//     last:'totra',
//     video: ['javascript','this','keyword'],
//     info(){
//         this.video.forEach(function(tag){
//             console.log(this.name,tag,this.last)

//         },this )
//         }
// };
// random.info()


///form js 

// function validate(){
//     if(document.myform.email.value == ""){
//         alert('please provide email Id');
//         document.myform.email.focus()
//         return false;
//     }else if (document.myform.password.value == ""){
//         alert('please your provide your password ');
//         document.myform.password.focus()
//         return false;
//     }else{
//         return true;
//     }
// }


// function myforms(){
//     if(document.myform.email.value == ""){
//         console.log('please provide email ')
//         document.myform.email.focus();
//         return  false;
//     }else if (document.myform.password.value == ''){
//         console.log('please provide password ')
//         document.myform.password.focus();
//         return false
        
//     }else{  
//         console.lsog('try download your profile...')
//         return true

//     }
// }



// function myforms(){
//     var mail = document.getElementById('text').value;
//     var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    
//     if(regx.text(mail)){
//     alert('you have provided a valide email id ')
//         return true;
// }else{
//     alert('sorry !  inccorect email id ')
//     return false
// }}



