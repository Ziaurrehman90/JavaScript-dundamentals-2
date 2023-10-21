// first creste the list 
let list=['ziaurrehman','malik','mithun','anjali','neha'];
// lets creste the function 
function isUserPresent(user){
    if(list.includes(user)){
        console.log("Yes", user, "is a valid user");
    }
    else{
        console.log("No, ",user," is not a valid user");
    }
}
isUserPresent('mithun')
isUserPresent('Someone')
