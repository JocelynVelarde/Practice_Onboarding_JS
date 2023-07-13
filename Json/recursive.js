const jsonObject = require('./employees.json');

jsonObject.filter(item => {
    iterate(item);
});

function iterate(object){
    for(x in object){
        if(typeof(object[x]) == "object"){
            iterate(object[x]);
        }else{
            if(x == "Interests" || x == "Name"){
                console.log(object[x]);
            }
        }
    }
}