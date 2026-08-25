class Ase {
  constructor() {
    this.name = "Ase";
    this.version = "1.0.0";
  }

  init() {
    console.log(`${this.name} initialized.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ase = new Ase();
  ase.init();
});
