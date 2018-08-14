import ApodService from "./apod-services.js"

const apodService = new ApodService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div> 
 <div id="apods">
  <button onclick="app.assets.apod-services.getApods()">
  Get Picture of the day
  </button>
  </div>
`
}

function drawApods(data) {
  let apodElem = document.getElementById('apods')
  let template = ''
  data.results.forEach(apod => {
    template += `<div>
    ${apod.url}
    </div>`
  })

  apodElem.innerHTML = template

}
function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}

export default class ApodController {
  constructor() {
    draw()
  }

  getApods() {
    console.log("HELLO FROM CONTROLLER")
    apodService.getApods(drawApods, drawError)

  }
}