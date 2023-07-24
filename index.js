// assign array values 
const myColor = ["red", "black", "rgb(13, 219, 133)","#00ffff"]

// Targeting HTML Elements
const btn = document.querySelector(".button")
const body = document.querySelector("body")
const Color = document.querySelector(".color")
const title = document.querySelector("h3")
const hex = document.querySelector(".hex")
const sim = document.querySelector(".sim")


// Add Click event 
    btn.addEventListener("click",()=>{

    // Add random function in case click array values shoe random
    let random= Math.floor(Math.random() * myColor.length)

    // assign bodyTag to array values show to random color in out put 
    body.style.backgroundColor = myColor[random]

    // store the string interpolation used to if condition   
    let col = `Background Color is ${myColor[random]}`
    let hexa = `Background Color Hex is ${myColor[random]}`
    let rgb = `Background Color RGB is ${myColor[random]}`

    if(myColor[random] == "#00ffff"){
        Color.innerText = hexa
    }
    else if(myColor[random] == "rgb(13, 219, 133)"){
        Color.innerText = rgb
    }
    else{
        Color.innerText = col
    }

    // change color same body color
    Color.style.backgroundColor="#ffff"
    Color.style.color = myColor[random]

    // change button color same body color
    btn.style.backgroundColor = "#ffff"
    btn.style.color = myColor[random]

    // change header color same body color
    title.style.color = myColor[random]
    hex.style.color = myColor[random]
    sim.style.color = myColor[random]

})