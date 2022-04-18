
require('dotenv/config') 
const axios = require('axios')
const readline = require('readline-sync');

const notNumber=(num)=>{
    if(isNaN(num)){
        console.log("Digite apenas numeros!!\n")
        return false;
    }
    return true;
}

var option = 0;
while(option !=2){
    option = readline.question("Digitar 1 - para buscar por latitude e longitude\nDigite 2 - Sair\n");
    if(option!=2 && notNumber(option)){
        var lat = parseInt(readline.question("Digite a latitude: "));
        var lon = parseInt(readline.question("Digite a longitude: "));
         if(notNumber(lat) && notNumber(lon)){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
            .then((resp)=>{          
                console.log("\nTemperatura: "+ resp.data.main.temp  +"ºF\n");
            })
            .catch(err => console.log(err))
         }else continue;
    }
}

