import View from "./view.js";
import PreviewView from "./previewView.js";

class VehiclesView extends View {
  _parentElement = document.querySelector(".insights");
  _header = document.querySelector(".main-header");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  reloadVehiclePage() {
    document.addEventListener("click", (e) => {
      const target = e.target.closest("#vehicle-link");

      if (target) {
        const targetAtt = target.getAttribute("href");

        location.assign(targetAtt);
        location.reload();
      }
    });
  }

  reloadComparisonsPage() {
    document.addEventListener("click", (e) => {
      const target = e.target.closest("#nav-link");

      console.log(target);

      if (target) {
        const targetAtt = target.getAttribute("href");

        location.assign(targetAtt);
        location.reload();
      }
    });
  }

  _generateHeader() {
    return `Vehicle list`;
  }

  _generateMarkup() {
    return this._data.map((res) => PreviewView.render(res, false)).join("");
  }
}

export default new VehiclesView();
