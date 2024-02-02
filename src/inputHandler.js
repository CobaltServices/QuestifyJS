class InputHandler {
  constructor() {
    this.keyPressed = null;
    this.mouseClicked = false;

    // Set up event listeners
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('click', this.handleMouseClick.bind(this));
  }

  handleKeyDown(event) {
    this.keyPressed = event.key;
  }

  handleMouseClick() {
    this.mouseClicked = true;
  }
}

module.exports = InputHandler;
