// VIEWS
import comparisonsView from "../views/comparisonsView.js";

// MODEL
import * as model from "../models/model.js";

const controlComparisons = async function () {
  try {
    // 1) Render spinner
    comparisonsView.renderSpinner();

    // 2) Load vehicles data from model
    await model.loadVehicles();

    comparisonsView.render(model.state.vehicles);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  comparisonsView.addHandlerRender(controlComparisons);
};

init();
