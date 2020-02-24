function exterminate(){
    document.getElementById("texts").value="";
}

function buira(){

    var div = document.getElementById("texts");
 
    if(div.value == div.value.toLowerCase()){
        div.value = div.value.toUpperCase();
       
    }else if(div.value == div.value.toUpperCase()){
        div.value = div.value.toLowerCase();  
        
    }


}

function sort(){
    var div = document.getElementById("texts").value;
    var res = div.split("\n");
    var sortedString = res.sort();
    var joinString = sortedString.join("\n");
    document.getElementById("texts").value = joinString;

}

function reverseFlash(){
   

    var div = document.getElementById("texts").value;
    var res = div.split("\n");
    
    for(var i = 0; i <res.length; i++){
        res[i] = res[i].split("").reverse().join("");
    }
    
    var joinString = res.join("\n");
    document.getElementById("texts").value = joinString;
    
    

}

function huda(){
    var div = document.getElementById("texts");


    div.value = div.value.replace(/ /g,"");    

}

function handao(){
    var div = document.getElementById("texts").value;
    var res = div.split("\n");
    for(var i = 0; i < res.length; i++){
        res[i] = i + 1+". "+ res[i];
    }

    var joinArray = res.join("\n");
    document.getElementById("texts").value = joinArray;
}

function khichuri(){
    var div = document.getElementById("texts").value;
    var res = div.split("\n");
    for (var i = res.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = res[i];
        res[i] = res[j];
        res[j] = temp;
    }

    var joinArray=res.join("\n");
    document.getElementById("texts").value=joinArray;
    
    
   

            }