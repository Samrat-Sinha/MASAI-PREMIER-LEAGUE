// write js code here corresponding to favourites.html

var sam1 = JSON.parse(localStorage.getItem("favourites"))
console.log(sam1)

sam1.forEach(function(el){
    var tr1 = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = el.sammatchno
    var td2 = document.createElement("td")
    td2.innerText = el.samteama
    var td3 = document.createElement("td")
    td3.innerText =el.samteamb
    var td4 = document.createElement("td")
    td4.innerText =el.samdate
    var td5 = document.createElement("td")
    td5.innerText =el.samvanue
    var td6 = document.createElement("td")
    td6.innerText = "Delete" 
    td6.addEventListener("click",function(){
        deleted(el)
    })
    
    tr1.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr1)
})
  function deleted()
  {
      
  }







