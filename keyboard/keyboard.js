const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: '',
    capsLock: false
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div')
    this.elements.keysContainer = document.createElement('div')

    //Setup main elements
    this.elements.main.classList.add('keyboard', '1keyboard--hidden')
    this.elements.keysContainer.classList.add('keyboard__keys')

    // Add to DOM
    this.elements.main.append(this.elements.keysContainer)
    document.body.append(this.elements.main)
  },

  _createKeys() {

  },

  _triggerEvent(handlerName) {
    console.log('Event triggered', handlerName)
  },

  _toggleCapsLock() {
    console.log('Caps Lock Toggle!')
  },

  open(initialValue, oninput, onclose){

  },

  close() {

  }
}

window.addEventListener('DOMContentLoaded', function () {
  keyboard.init()
})