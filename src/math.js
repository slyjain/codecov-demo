function add(a,b){
    return a+b;
}
function isEven(n){
    if(n % 2 === 0){
        return true;
    }
    return false;
}
module.exports={
    add,isEven
}