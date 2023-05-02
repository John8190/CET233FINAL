export default class View {
  _data;

  render(data, render = true) {
    this._data = data;

    const markup = this._generateMarkup();
    const header = this._generateHeader();

    if (!render) return markup;

    this._clear();
    this._header.insertAdjacentHTML("afterbegin", header);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._header.innerHTML = "";
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="../../imgs/icons.svg#icon-loader"></use>
        </svg>
      </div>
  `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
