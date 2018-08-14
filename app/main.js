import ApodController from './assets/apod-controller.js'

class App {
  constructor() {
    this.controllers = {
      swapi: new ApodController
    }
  }
}

const app = new App()
window.app = app