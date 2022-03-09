
//1  falsy
// '',0,false,null,undefindd
const number=-55;
if(number){
    // console.log('truthy')
}else{
    // console.log('falsy')
}


//  Ternary operator
const money=200
let foods;
const food=money>100? 'Muton':'Birani'
// console.log(food)



//3 shortcut
// number to string conver
const num=56
const numString=num+''
// console.log(numString)

// string to number
const input='558'
const converInput=+input
// console.log(converInput)


// using a condition ternary operator
let isActive=false
const showUser=()=>console.log('display user')
const hidUser=()=>console.log('hid user')
// isActive?showUser():hidUser()
isActive && showUser()
isActive || hidUser()
