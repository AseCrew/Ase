class MenuState {
  constructor() {
    this.active = false;
  }

  enter() {
    this.active = true;
  }

  exit() {
    this.active = false;
  }

  update() {
    if (!this.active) return;
  }
}

export default MenuState;
