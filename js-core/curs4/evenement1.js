var dr = document.querySelector("#dreptun")
dr.addEventListener("click", minimize)

async function minimize () {
    
    for (let i =20 ; i =>0; i-- ){
        await new Promise(r => setTimeout(r,30))
        dr.style.height = i +"em"
    }
    
}