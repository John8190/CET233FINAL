import {DATA, RES_PER_PAGE} from "./config/config.js";

export const state = {
  vehicle: {},
  vehicles: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const createVehicleObject = function (data) {
  const vehicle = data;

  return (state.vehicle = {
    id: vehicle.id,
    name: vehicle.name,
    img: vehicle.img,
    topSpeed: vehicle.topSpeed,
    batteryCapacity: vehicle.batteryCapacity,
    efficiency: vehicle.efficiency,
    horsePower: vehicle.horsePower,
    range: vehicle.range,
    chargeTime: vehicle.chargeTime,
  });
};

export const loadVehicle = async function (id) {
  try {
    let data;

    DATA.map((v) => {
      if (v.id == id) return (data = v);
    });

    state.vehicle = createVehicleObject(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const loadVehicles = async function () {
  try {
    const data = DATA;

    state.vehicles = data.map((vehicle) => {
      return {
        id: vehicle.id,
        name: vehicle.name,
        img: vehicle.img,
      };
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const getVehiclesResults = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};
