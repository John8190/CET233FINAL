import View from "./view.js";

class ComparisonsView extends View {
  _parentElement = document.querySelector(".insights");
  _header = document.querySelector(".main-header");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateHeader() {
    return `Comparisons`;
  }

  _generateMarkup() {
    return `<div class="vehicle" id="vehicle-boxes">
          <div class="box">
            <label for="search">Search Vehicle: </label>
            <input id="search">
            <input id="input1" type="submit" value="Add Vehicle" onclick="changeVehicle()">
            <form">
              <label for="vehicle-type"></label>
              <br><br>
              </form>
              <h1 id="vehicle-1-title"></h1>
              <div class="vehicle-box">
                <img class="vehicle-img" src="../../imgs/Electric Car 1.jpg" alt="" id="vehicle1">
                <div class="vehicle-desc-header">
                  <h3>PERFORMANCE</h3>
                </div>
                <div class="vehicle-desc-content">
                  <p id="spec-1"></p>
                  <p id="spec-2"></p>
                  <p id="spec-3"></p>
                  <p id="spec-4"></p>
                  <p id="spec-5"></p>
                  <p id="spec-6"></p>
                </div>
              </div>
          </div>
          <div class="box">
            <label for="search">Search Vehicle: </label>
            <input id="search2">
            <input id="input1" type="submit" value="Add Vehicle" onclick="changeVehicle2()">
            <br><br>
            </form>
            <h1 id="vehicle-2-title">Electric Vehicle 2</h1>
            <div class="vehicle-box">
              <img class="vehicle-img" src="../../imgs/Electric Motorbike 1.jpg" alt="" id="vehicle2">
              <div class="vehicle-desc-header">
                <h3>PERFORMANCE</h3>
              </div>
              <div class="vehicle-desc-content">
                <p id="vehicle2-spec-1"></p>
                <p id="vehicle2-spec-2"></p>
                <p id="vehicle2-spec-3"></p>
                <p id="vehicle2-spec-4"></p>
                <p id="vehicle2-spec-5"></p>
                <p id="vehicle2-spec-6"></p>
              </div>
            </div>
          </div>
        </div>`;
  }
}

export default new ComparisonsView();
