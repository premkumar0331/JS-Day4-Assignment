const obj1 = {
    "name": "prem Kumar",
    "age": 30
}

const obj2 = {
    "age": 30,
    "name": "prem Kumar"

}

const isequal = JSON.stringify(obj1)===JSON.stringify(obj2);

console.log(isequal);
