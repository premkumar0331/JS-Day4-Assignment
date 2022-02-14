var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    for(var i of data){
        console.log(i["flag"]);
    }
}