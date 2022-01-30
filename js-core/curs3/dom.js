var p = document.getElementById("greenplanet")
p.innerText = "An alien appeared"
p.innerHTML = "<b>An Monkey appeared</b>"
// p.style.color = "#65a4c5"
// p.style.backgroundColor = "rgb(230, 210 ,150"
p.classList.add("warning")

var newElement = document.createElement("p")
newElement.innerText ="Hello there"

p.after(newElement)

document.querySelector("#blueplanet").remove()
// execute functia changeMessage cand sa da clic pa input
document.querySelector("input").addEventListener('click' , changeMessage)
function changeMessage() {
    
    document.querySelector("#redplanet").classList.add('warning')
}