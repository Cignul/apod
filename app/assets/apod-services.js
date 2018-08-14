import Apod from "../models/Apod.js"



let pictures = {}
export default class ApodService {
  getApods(draw, drawError) {
    console.log("HELLO FROM apodSERVICE")
    fetch('https://api.nasa.gov/planetary/apod?api_key=VuFgFydsR4HxK4p9P1HFLxUPte1gTGMivMIkvAbs')
      .then(res => res.json())
      .then(draw)
      .catch(drawError)


  }

}


