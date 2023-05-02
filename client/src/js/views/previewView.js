import View from "./view.js";

class PreviewView extends View {
  _parentElement = "";
  _header = document.querySelector(".main-header");

  _generateHeader() {
    return ``;
  }

  _generateMarkup() {
    return `<div class="vehicle-card">
					    <a id="vehicle-link" href='#${this._data.id}'>
						    <img src="${this._data.img}" alt="vehicle" />
						    <h1>${this._data.name}</h1>
					    </a>
            </div>`;
  }
}

export default new PreviewView();
