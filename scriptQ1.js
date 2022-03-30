var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let equal = false;
function issame(obj1,obj2){
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);
    if(obj1keys.length == obj2keys.length){
        for(let key in obj1){
            if(obj1[key]==obj2[key]){
                equal = true;
            }else{
                equal = false;
                break;
            }
        }
    }
return equal;
}
console.log(issame(obj1,obj2));
