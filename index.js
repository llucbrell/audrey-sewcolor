
module.exports= function(){

var data;
var name;	
var bul;





return{
	     grow: function(simName, customObject){ printInfo(simName, customObject);},
harvestData: function(){ return data;}
}

function checkColors(name, customObject){
  var colors=Object.getOwnPropertyNames(customObject.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    customObject.colors[name]=customObject.colors.default;
    } 
}


function checkProperties(name, customObject){
var properties= Object.getOwnPropertyNames(customObject);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}

function printInfo(simName, customObject){
  checkColors("error", customObject);
  checkColors("warning", customObject);
  checkColors("success", customObject);
  checkColors("aux", customObject);
  if(customObject.ers>0){infoError(simName, customObject);}
  if(customObject.ers===0 && customObject.warn===0){infoSuccess(simName, customObject);}
  if(customObject.ers===0 && customObject.warn>0){infoWarning(simName, customObject);}
}


//print the info message
function infoSuccess(simName, customObject){
name= simName.slice(2); //delete simbol of the name
checkProperties(name, customObject);//checks if exists
checkColors(name, customObject);//checks if there is colors
     console.log(); 
     process.stdout.write(customObject.colors.success(customObject[name]));
}

function infoWarning(simName, customObject){
name= simName.slice(2); //delete simbol of the name
checkProperties(name, customObject);//checks if exists
checkColors(name, customObject);//checks if there is colors
     console.log(); 
     process.stdout.write(customObject.colors.warning(customObject[name]));
}

function infoError(simName, customObject){
name= simName.slice(2); //delete simbol of the name
checkProperties(name, customObject);
checkColors(name, customObject);
     console.log(); 
     process.stdout.write(customObject.colors.error(customObject[name]));
}

}