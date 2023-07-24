// assign array values 
const myColor = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]

// Targeting HTML Elements
const body = document.querySelector("body")
const btn = document.querySelector(".buttons")
const Color = document.querySelector(".colorName")
const title = document.querySelector("h3")
const hex = document.querySelector(".hex")
const sim = document.querySelector(".sim")

// Add Click event 
btn.addEventListener("click",()=>{

    // store the # in variabe 
    let code = "#"

    // loop the 6 digit  
    for(let i=0 ; i<6; i++){
        // store the random number and string in array
        let random = Math.floor(Math.random()*myColor.length)
        // store the random vales in # plus random value
        code += myColor[random]
    }

    // assign body background in random value
    body.style.backgroundColor= code

    // show the random value
    Color.innerText = `Background Color hex is ${code}`

    // change color same body color
    Color.style.backgroundColor = "#ffff"
    Color.style.color = code

    // change button color same body color
    btn.style.backgroundColor = "#ffff"
    btn.style.color = code

    // change header color same body color
    title.style.color = code
    hex.style.color = code
    sim.style.color = code
})





