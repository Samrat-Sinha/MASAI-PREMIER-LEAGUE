// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)

function myfunction(){

    event.preventDefault()
    var arr = JSON.parse(localStorage.getItem("schedule")) || []
    var samobj = {

        sammatchno: document.querySelector("#matchNum").value,
        samteama: document.querySelector("#teamA").value,
        samteamb: document.querySelector("#teamB").value,
        samdate:document.querySelector("#date").value,
        samvanue:document.querySelector("#venue").value
    }

    arr.push(samobj)

    localStorage.setItem("schedule",JSON.stringify(arr))
    window.location.href="matches.html"
}