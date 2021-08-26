// setTimeout(()=>{document.write("loaded")}, 1000)
// setTimeout(()=>{document.write("loaded")}, 2000)
// setTimeout(()=>{document.write(`<p>hello</p>`)}, 1000)

document.write(`
  <h1 class = "changeColor">aa</h1>
  <p class = "changeColor">ss</p>
  <p class = "changeColor">ddd</p>
  <p class = "changeColor">fff</p>
  <p class = "changeColor">ggg</p>
  <p class = "changeColor">ggh</p>
  <p class = "changeColor">fd</p>
  <p class = "changeColor">sd</p>
  <p class = "changeColor">cv</p>
  <p class = "changeColor"nh></p>
  <div id ="divId" style = "position:absolute;"></div>
  <button id = "btn" type="button">click</button>
  <input id ="numInput" type="number">

  
 
  `)






// let color = document.getElementsByClassName("changeColor")
let myDiv = document.getElementById("divId")
let button = document.getElementById("btn")
// let  userInput = document.getElementById("numInput")
// setTimeout(()=>{
//     for(let i =0 ; i < color.length-7 ; i++){
//         myDiv.innerHtml += color[i].style.backgroundColor = "red" ;

//     }
// },1000)
// ;

// setTimeout(()=>{
//   for(let i =0 ; i < color.length ; i++){
//       myDiv.innerHtml += color[i].style. border =  "10px solid black" ;

//   }
// }, 2000)
// ;

// setTimeout(()=>{
//   for(let i = 0 ; i < color.length - 7 ; i++){
//     myDiv.innerHtml += color[i].style.display="none"

//   }
// } ,3000)


// button.addEventListener("click" , setTimeout(()=>{
//     alert("clicked")
// },1000) )


// userInput.oninput = (e)=>{
// myDiv.innerHTML += (`<p>   ${e.target.value * 5}    </p>`)
// }

// userInput.onchange = (e)=>{
//   myDiv.innerHTML += (`<p>   ${e.target.value * 10}    </p>`)
// }

// // //! 7 
// myDiv.style.width = "200px"
// myDiv.style.height = "200px"
// myDiv.style.background = "red"
// myDiv.style.marginTop = " 0"
// myDiv.style.marginLeft = " 0"
// button.addEventListener("click", () => {

//   myDiv.style.height = parseInt(myDiv.style.height) - 10 + "px"
//   myDiv.style.width = parseInt(myDiv.style.width) - 10 + "px"
//   myDiv.style.marginTop = parseInt(myDiv.style.marginLeft) + 50 + "px"
//   myDiv.style.marginLeft = parseInt(myDiv.style.marginLeft) + 50 + "px"

// })

// // //! 8 
// myDiv.style.width = "200px"
// myDiv.style.height = "200px"
// // var position = 0

// var move = setInterval(() => {
//   var random = Math.floor(Math.random() * 1100)
//   var randomTwo = Math.floor(Math.random() * 250)
//   // position += 5
//   myDiv.style.left = random + "px"
//   myDiv.style.top = randomTwo + "px"

// }, 1000);


// button.addEventListener("click", () => {
//   clearInterval(move)
// })


//! 9 


let arrayOfCountry = [
  { Name: "Afghanistan", flag: "https://www.worldometers.info/img/flags/small/tn_af-flag.gif" },
  { Name: "Albania", flag: "https://www.worldometers.info/img/flags/small/tn_al-flag.gif" },
  { Name: "Algeria", flag: "https://www.worldometers.info/img/flags/small/tn_ag-flag.gif" },
  { Name: "Andorra", flag: "https://www.worldometers.info/img/flags/small/tn_an-flag.gif" },
  { Name: "Angola", flag: "https://www.worldometers.info/img/flags/small/tn_ao-flag.gif" },
  { Name: "Argentina", flag: "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif" },
  { Name: "Armenia", flag: "https://www.worldometers.info/img/flags/small/tn_am-flag.gif" },

]

var counter = 0
var divPar = document.getElementById("divElement")

divPar.innerHTML = `<p>${counter}</p>`
setInterval(() => {
  for (let i = 0; i < arrayOfCountry.length; i++) {
    var random = Math.floor(Math.random() * 1100)
    var randomTwo = Math.floor(Math.random() * 250)
    divPar.style.left = random + "px"
    divPar.style.top = randomTwo + "px"

    divPar.innerHTML += `<img src="${arrayOfCountry[i].flag}">`;
  }
  setTimeout(() => {
    divPar.innerHTML = ""
  }, 3000);
}, 6000);


divPar.onclick = (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
}


divPar.addEventListener("click", (e) => {
  e.target.remove();
});

divPar.addEventListener("click", () => {

  divPar.innerHTML += `<p  style="margin-top:50px"  >Amount of clicks ${counter += 1}</p>`
})

button.addEventListener("click", () => {
  divPar.innerHTML = counter = 0
})