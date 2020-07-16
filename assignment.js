//Problem -1 : feetToMile

function feetToMile(foot){
    if (foot<0){
        return "Feet Can not be Negative!!!!";
    }
    else{
        var mile = foot*0.000189394;
    }
    return mile.toFixed(3);
}

//Problem-2 : woodCalculation

function woodCalculator(chairs, tables, beds){
    var totalWood = 0;
   if (chairs < 0 ){
       return "Chair number can not be negative";
   }
   if(tables<0){
       return "Table number can not be negative";
   }
   if(beds<0){
    return "Bed number can not be negative";
   }
   var chairWood = chairs*1;
   var tableWood = tables*3;
   var bedWood = beds*5;
   totalWood = chairWood + tableWood + bedWood;

   return totalWood;
}

//Problem-3 : brickCalculator

function brickCalculator(floor){
    var totalBrick = 0;
    var secondTenFloor = 10*12*1000;

    if(floor<0){
        return "Floor number can not be negative!!!";
    }
    else if(floor>=1 && floor<=10){
         totalBrick = floor*15*1000;
    }
    else if(floor>=11 && floor<=20){
        
        var restFloor = (floor-10)*12*1000;
        totalBrick = brickCalculator(10) + restFloor;
    }
    else {
 
        var restFloor = (floor-20)*10*1000;
        totalBrick = brickCalculator(10) + secondTenFloor + restFloor; 
        
    }

    return totalBrick;
}

//Problem-4 : tinyFriend

function tinyFriend(friends){
    for(var k=0; k< friends.length; k++){
        if(friends[k] == " " || friends[k] == ""){ 
            return "Name can not be blank or whitespace.";  
        }
    }    
    var tinyFrnd = friends[0];
    var tiny = tinyFrnd.length;
    for (var i=0; i< friends.length; i++){
        var element = friends[i];
        var element1 = element.length;
        if(element1 < tiny){
            tinyFrnd = element;
        }
    }
    return tinyFrnd;        

}