// write js code here corresponding to matches.html


var sam = JSON.parse(localStorage.getItem("schedule"))






sam.forEach(function(el){

    var tr1 = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = el.sammatchno
    var td2 = document.createElement("td")
    td2.innerText = el.samteama
    var td3 = document.createElement("td")
    td3.innerText = el.samteamb
    var td4 = document.createElement("td")
    td4.innerText = el.samdate
    var td5 = document.createElement("td")
    td5.innerText = el.samvanue
    var td6 = document.createElement("td")
    td6.innerText = "Add as Favourites" 
    td6.style.color = "green"
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
        samfav(el)
    })
    tr1.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr1)

})

document.querySelector("#filterVenue").addEventListener("change",kkr)


function kkr(){

    var sort=document.querySelector("#filterVenue").value;
    

    if(sort=="Mumbai")
    {
     if(sam.samvanue=="Mumbai")
      console.log(sam)
        }
    }




 
var fav = JSON.parse(localStorage.getItem("favourites")) || []

function samfav(el){

    fav.push(el)
    console.log(fav)
    localStorage.setItem("favourites",JSON.stringify(fav))
}