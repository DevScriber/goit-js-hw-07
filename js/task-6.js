class BoxManager {
  constructor() {
    this.input = document.querySelector("#controls input");
    this.createButton = document.querySelector("[data-create]");
    this.destroyButton = document.querySelector("[data-destroy]");
    this.boxesContainer = document.querySelector("#boxes");

    this.createButton.addEventListener("click", () => this.createHandler());
    this.destroyButton.addEventListener("click", () => this.destroyBoxes());
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  createHandler() {
    const amount = this.input.value;
    if (amount > 0 && amount <= 100) {
      this.createBoxes(amount);
      this.input.value = "";
    } else {
      alert("Введи в поле input значения от 1 до 100");
    }
  }

  createBoxes(amount) {
    this.boxesContainer.innerHTML = '';
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = this.getRandomHexColor();
      boxes.push(box);
    }
    this.boxesContainer.append(...boxes);
  }

  destroyBoxes() {
    this.boxesContainer.innerHTML = '';
  }
}

new BoxManager();