import MenuState from "./ai/menus/MenuState.js";

class Ase {
  constructor() {
    this.name = "Ase";
    this.version = "1.0.0";
    this.currentState = null;
  }

  init() {
    console.log(`${this.name} initialized.`);
    this.switchState(new MenuState());
  }

  switchState(newState) {
    if (this.currentState) {
      this.currentState.exit();
    }
    this.currentState = newState;
    this.currentState.enter();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ase = new Ase();
  ase.init();
});
