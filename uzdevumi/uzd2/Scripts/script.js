let masivs = [];
function addElement(){
    //let vertiba = parseInt(document.getElementById("masElements").value);
    let vertiba = document.getElementById("masElements").value;
    vertiba == "" ? window.alert("Lūdzu, aizpildi ievadlauciņu!") : masivs.push(vertiba);
    document.getElementById("masElements").value="";
}
function deleteElement(){
    //let indekss = parseInt(document.getElementById("masElemIndx").value);
    let indekss = document.getElementById("masElemIndx").value;
    indekss == "" ?  //Aplūkojam ievadlauciņa vērtību, ja tur ir tukšums, tad izpildam masivs.pop()
    masivs.pop() || 
    (masivs.length == 0 ? //Aplūkojam vai masīvs nav galīgi tukšs
         window.alert("Tukšs masīvs, lūdzu, ielādē kādu elementu!") : "") : masivs.splice(indekss-1, 1);
    document.getElementById("masElemIndx").value=""; //Attīru ievadlauciņu
}
function printOutArrCntnt(){
    let izvads = "";
    for(let i = 0; i < masivs.length; i++){
        izvads += "&nbsp;"+masivs[i];
    }
    izvads == 0 ? document.getElementById("arrCntntOutput").innerHTML = "Tukšs kā Krājbanka" : document.getElementById("arrCntntOutput").innerHTML = izvads;
}
