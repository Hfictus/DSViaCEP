




function State() {
    this.container = null;
    this.btnClose = null;
}

const state = new State();

export function init() {
    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");
    state.btnClose.addEventListener("click", handleBtnCloseClick);
    state.container.addEventListener("click", handlecontainerClick);
}

export function showModal() {
    state.container.classList.add("active");
}

export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}

function handlecontainerClick(event) {
    event.preventDefault();
    if(event.target === this) {
        closeModal();
    }
}