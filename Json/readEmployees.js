const jsonObject = require('./employees.json');

console.log(jsonObject.Employees.Employee1.Name);

var employees = jsonObject["Employees"];


function readEmployees(json){
    for(x in json){
        var object = json[x];
        if(object.Interests == undefined){
            console.log(x + " does not have any interest");
        }else
        console.log(x + ": Has interests in " + object.Interests);
    }
}

readEmployees(employees);
