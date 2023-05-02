// VIEWS
import vehiclesView from "../views/vehiclesView.js";
import vehicleView from "../views/vehicleView.js";

// MODEL
import * as model from "../models/model.js";

const controlVehicleList = async function () {
  try {
    // 1) Render spinner
    vehiclesView.renderSpinner();

    // 2) Load vehicles data from model
    await model.loadVehicles();

    // 3) Render vehicles list
    vehiclesView.render(model.state.vehicles);

    // 4) Redirect to vehicle page
    vehiclesView.reloadVehiclePage();
  } catch (error) {
    console.log(error);
  }
};

const controlVehicle = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id || id == "comparisons") return;

    // 1) Render spinner
    vehicleView.renderSpinner();

    // 2) Load vehicle data from model
    await model.loadVehicle(id);

    // 3) Render vehicle data
    vehicleView.render(model.state.vehicle);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  vehiclesView.addHandlerRender(controlVehicleList);
  vehicleView.addHandlerRender(controlVehicle);
};

init();
