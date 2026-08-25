import Paths from "../Paths.js";

class MenuState {
  constructor() {
    this.active = false;
    this.paths = new Paths();
    this.container = null;
    this.chatLog = null;
    this.inputField = null;
  }

  enter() {
    this.active = true;
    this.createUI();
  }

  createUI() {
    this.container = document.createElement("div");
    this.container.id = "ase-chat-container";

    this.chatLog = document.createElement("div");
    this.chatLog.id = "ase-chat-log";

    const inputContainer = document.createElement("div");
    inputContainer.id = "ase-input-container";

    this.inputField = document.createElement("input");
    this.inputField.type = "text";
    this.inputField.placeholder = "Type a message...";

    const sendBtn = document.createElement("button");
    sendBtn.innerText = "Send";

    sendBtn.addEventListener("click", () => this.sendMessage());
    this.inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.sendMessage();
    });

    inputContainer.appendChild(this.inputField);
    inputContainer.appendChild(sendBtn);

    this.container.appendChild(this.chatLog);
    this.container.appendChild(inputContainer);

    document.getElementById("app").appendChild(this.container);
  }

  sendMessage() {
    const text = this.inputField.value.trim();
    if (!text) return;

    this.appendMessage("User", text);
    this.inputField.value = "";

    this.processAIResponse(text);
  }

  appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `ase-message ${sender.toLowerCase()}`;
    msg.innerText = `${sender}: ${text}`;
    this.chatLog.appendChild(msg);
    this.chatLog.scrollTop = this.chatLog.scrollHeight;
  }

  processAIResponse(userText) {
    setTimeout(() => {
      this.appendMessage("Ase", `Received: "${userText}"`);
    }, 500);
  }

  exit() {
    this.active = false;
    if (this.container) {
      this.container.remove();
    }
  }

  update() {
    if (!this.active) return;
  }
}

export default MenuState;
