var cy = document.querySelector('#cycle')
cy.addEventListener('click' , move)

async function move () {
    
    for (let i =20 ; i <=680; i++ ){
        await new Promise(r => setTimeout(r,5))
        cycle.style.top  = cycle.style.left = i +'px'
    }
   
}