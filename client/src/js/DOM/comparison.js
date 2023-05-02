// Sample Pseudo-Data for Prototype Application

var vehicleData = {
  ElectricCar1: [
    "Electric Car 1",
    "Top Speed(km/h): 125",
    "Battery Capacity: 75.5 kWh (kilowatt hours)",
    "Effeciency: 260 Wh/mi",
    "Horse Power: 400",
    "Range: 300 miles",
    "Charge Time: 8 hours",
  ],
  ElectricCar2: [
    "Electric Car 2",
    "Top Speed(km/h): 120",
    "Battery Capacity: 70.5 kWh (kilowatt hours)",
    "Effeciency: 260 Wh/mi",
    "Horse Power: 400",
    "Range: 300 miles",
    "Charge Time: 8 hours",
  ],
  ElectricCar3: [
    "Electric Car 3",
    "Top Speed(km/h): 140",
    "Battery Capacity: 90.5 kWh (kilowatt hours)",
    "Effeciency: 260 Wh/mi",
    "Horse Power: 400",
    "Range: 300 miles",
    "Charge Time: 8 hours",
  ],
  ElectricMotorbike1: [
    "Electric Motorbike 1",
    "Top Speed(km/h): 90",
    "Battery Capacity: 40 kWh (kilowatt hours)",
    "Effeciency: 100 Wh/mi",
    "Horse Power: 80",
    "Range: 100 miles",
    "Charge Time: 6 hours",
  ],
  ElectricMotorbike2: [
    "Electric Motorbike 2",
    "Top Speed(km/h): 80",
    "Battery Capacity: 35 kWh (kilowatt hours)",
    "Effeciency: 75 Wh/mi",
    "Horse Power: 80",
    "Range: 100 miles",
    "Charge Time: 6 hours",
  ],
  ElectricMotorbike3: [
    "Electric Motorbike 3",
    "Top Speed(km/h): 95",
    "Battery Capacity: 45 kWh (kilowatt hours)",
    "Effeciency: 120 Wh/mi",
    "Horse Power: 80",
    "Range: 100 miles",
    "Charge Time: 6 hours",
  ],
  ElectricTractor1: [
    "Electric Tractor 1",
    "Top Speed(km/h): 65",
    "Battery Capacity: 65 kWh (kilowatt hours)",
    "Effeciency: 75 Wh/mi",
    "Horse Power: 40",
    "Range: 100 miles",
    "Charge Time: 15 hours",
  ],
  ElectricTractor2: [
    "Electric Tractor 2",
    "Top Speed(km/h): 50",
    "Battery Capacity: 45 kWh (kilowatt hours)",
    "Effeciency: 60 Wh/mi",
    "Horse Power: 40",
    "Range: 100 miles",
    "Charge Time: 15 hours",
  ],
  ElectricTractor3: [
    "Electric Tractor 1",
    "Top Speed(km/h): 60",
    "Battery Capacity: 60 kWh (kilowatt hours)",
    "Effeciency: 70 Wh/mi",
    "Horse Power: 40",
    "Range: 100 miles",
    "Charge Time: 15 hours",
  ],
};

// Loads first vehicle data on window load --- IGNORE!
window.addEventListener("load", function () {
  //Grabbing search input field value

  document.querySelector("#vehicle-1-title").innerHTML = "Electric Car 1";
  document.querySelector("#vehicle-2-title").innerHTML = "Electric Motorbike 1";

  var defaultSelection1 = "ElectricCar1";
  var defaultSelection2 = "ElectricMotorbike1";

  for (let i = 1; i < 7; i++) {
    document.querySelector("#spec-" + i).innerHTML =
      vehicleData[defaultSelection1][i];
    document.querySelector("#vehicle2-spec-" + i).innerHTML =
      vehicleData[defaultSelection2][i];
  }
});

function checkVehicleExists(userInput) {
  //Checks if the user inputted value is found within object of arrays.

  if (userInput in vehicleData) {
    return true;
  }
}

function changeVehicle() {
  //Grabbing search input field value

  selectedVehicle = document.getElementById("search").value;

  // Removing white spaces from vehicles search value so it can be used to search an array within the object of vehicleData.
  trimmedInputValue = selectedVehicle.replaceAll(" ", "");

  var isValidVehicle = checkVehicleExists(trimmedInputValue);

  if (isValidVehicle == true) {
    document.getElementById("search").value = "";
    document.getElementById("vehicle1").src =
      "/imgs/" + selectedVehicle + ".jpg";
    document.getElementById("vehicle-1-title").innerHTML = selectedVehicle;

    for (let i = 1; i < 7; i++) {
      document.querySelector("#spec-" + i).innerHTML =
        vehicleData[trimmedInputValue][i];
    }
  } else {
    errorMessage = "Vehicle entered does not exist - Error";
    console.log(errorMessage);
    document.getElementById("search").value = "";
    window.alert(errorMessage);
  }
}

function changeVehicle2() {
  //Grabbing search input field value

  selectedVehicle = document.getElementById("search2").value;

  // Removing white spaces from vehicles search value so it can be used to search an array within the object of vehicleData.
  trimmedInputValue = selectedVehicle.replaceAll(" ", "");

  var isValidVehicle = checkVehicleExists(trimmedInputValue);

  if (isValidVehicle == true) {
    document.getElementById("search2").value = "";
    document.getElementById("vehicle2").src =
      "/imgs/" + selectedVehicle + ".jpg";
    document.getElementById("vehicle-2-title").innerHTML = selectedVehicle;

    for (let i = 1; i < 7; i++) {
      document.querySelector("#vehicle2-spec-" + i).innerHTML =
        vehicleData[trimmedInputValue][i];
    }
  } else {
    errorMessage = "Vehicle entered does not exist - Error";
    console.log(errorMessage);
    document.getElementById("search2").value = "";
    window.alert(errorMessage);
  }
}

$(function () {
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
      this._super();
      this.widget().menu(
        "option",
        "items",
        "> :not(.ui-autocomplete-category)"
      );
    },
    _renderMenu: function (ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function (index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append(
            "<li class='ui-autocomplete-category'>" + item.category + "</li>"
          );
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    },
  });
  let data = [
    {label: "Electric Car 1", category: "Cars", value: "Electric Car 1"},
    {label: "Electric Car 2", category: "Cars", value: "Electric Car 2"},
    {label: "Electric Car 3", category: "Cars", value: "Electric Car 3"},
    {
      label: "Electric Motorbike 1",
      category: "Motorbikes",
      value: "Electric Motorbike 1",
    },
    {
      label: "Electric Motorbike 2",
      category: "Motorbikes",
      value: "Electric Motorbike 2",
    },
    {
      label: "Electric Motorbike 3",
      category: "Motorbikes",
      value: "Electric Motorbike 3",
    },
    {
      label: "Electric Tractor 1",
      category: "Tractors",
      value: "Electric Tractor 1",
    },
    {
      label: "Electric Tractor 2",
      category: "Tractors",
      value: "Electric Tractor 2",
    },
    {
      label: "Electric Tractor 3",
      category: "Tractors",
      value: "Electric Tractor 3",
    },
  ];

  $("#search").catcomplete({
    delay: 0,
    source: data,
  });
});

$(function () {
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
      this._super();
      this.widget().menu(
        "option",
        "items",
        "> :not(.ui-autocomplete-category)"
      );
    },
    _renderMenu: function (ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function (index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append(
            "<li class='ui-autocomplete-category'>" + item.category + "</li>"
          );
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    },
  });
  let data = [
    {label: "Electric Car 1", category: "Cars", value: "Electric Car 1"},
    {label: "Electric Car 2", category: "Cars", value: "Electric Car 2"},
    {label: "Electric Car 3", category: "Cars", value: "Electric Car 3"},
    {
      label: "Electric Motorbike 1",
      category: "Motorbikes",
      value: "Electric Motorbike 1",
    },
    {
      label: "Electric Motorbike 2",
      category: "Motorbikes",
      value: "Electric Motorbike 2",
    },
    {
      label: "Electric Motorbike 3",
      category: "Motorbikes",
      value: "Electric Motorbike 3",
    },
    {
      label: "Electric Tractor 1",
      category: "Tractors",
      value: "Electric Tractor 1",
    },
    {
      label: "Electric Tractor 2",
      category: "Tractors",
      value: "Electric Tractor 2",
    },
    {
      label: "Electric Tractor 3",
      category: "Tractors",
      value: "Electric Tractor 3",
    },
  ];

  $("#search2").catcomplete({
    delay: 0,
    source: data,
  });
});
