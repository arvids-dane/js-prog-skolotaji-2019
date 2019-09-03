var masivs = [];
var objekts = {};

function addElement(){
    //let vertiba = parseInt(document.getElementById("masElements").value);
    atsleg = document.getElementById("atslega").value;
    vertib = document.getElementById("vertiba").value;
    objekts[atsleg] = vertib;
    masivs.push(objekts);
    printOutArrCntnt();
}
function deleteElement(){
    //let vertiba = parseInt(dcdocument.getElementById("masElements").value);
    masivs.pop();
    printOutArrCntnt();
}
function addDesiredElement(){
     //let vertiba = parseInt(document.getElementById("masElements").value);
     let vertiba = document.getElementById("masivaElements").value;
     let vieta = document.getElementById("indekss").value;
     vertiba == "" ? window.alert("Lūdzu, aizpildi ievadlauciņu!") : masivs.splice(vieta,0,vertiba);
     document.getElementById("masivaElements").value="";
     document.getElementById("indekss").value="";
     printOutArrCntnt();
 }
function printOutArrCntnt(){
    let izvads = "";
    for(let i = 0; i < masivs.length; i++){
        izvads += "&nbsp;"+ JSON.stringify(masivs[i]);
    }
    izvads == 0 ? document.getElementById("arrCntntOutput").innerHTML = "Tukšs kā Krājbanka" : document.getElementById("arrCntntOutput").innerHTML = izvads;
}