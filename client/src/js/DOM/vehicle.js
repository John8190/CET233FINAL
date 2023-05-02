window.addEventListener("load", function () {
  myChart = new Chart(myChart, {
    type: "line",
    data: {
      labels: "",
      datasets: [
        {
          label: "Energy Used Across Day",
          data: "",
          borderWidth: 1,
        },
        {
          label: "Cost Per Hour",
          data: "",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          responsive: true,
          maintainAspectRatio: false,
        },
      },
    },
  });

  function checkKwhInput(pricePerKwhInput) {
    const errorMessage = "Please input a valid rate between 0.25 and 0.6";
    // Price Per Kwh Validation Checks.
    if (
      pricePerKwhInput.toString().length == 4 ||
      pricePerKwhInput.toString().length == 3
    ) {
      if (pricePerKwhInput >= 0.25 && pricePerKwhInput <= 0.6) {
        return true;
      } else {
        document.getElementById("pricePerKwh").value = "";
        window.alert(errorMessage);
      }
    } else {
      document.getElementById("pricePerKwh").value = "";
      window.alert(errorMessage);
    }
  }

  function updateChartData(sampleData, sampleDataHourlyCosts) {
    myChart.data.datasets[0].data = sampleData;
    myChart.data.datasets[1].data = sampleDataHourlyCosts;
    myChart.update();
  }

  function loadData() {
    let pricePerKwhInput = parseFloat(
      document.getElementById("pricePerKwh").value
    );

    //Calling function that validates pricePerKwh input.
    let checkKwhValidation = checkKwhInput(pricePerKwhInput);

    if (checkKwhValidation == true) {
      const sampleData = {};
      for (const value in sampleData) delete sampleData[value];
      for (let i = 1; i < 25; i++) {
        min = Math.ceil(1);
        max = Math.floor(2);

        generatedValue = Math.random() * (max - min) + min;
        generatedValue = generatedValue.toFixed(2);
        //Conditional statements ensure leading zero is removed after it reaches 10:00 time as a label.
        if (i >= 1 && i <= 9) {
          sampleData["0" + i + ":00"] = [generatedValue];
        } else {
          if (i >= 9 && i <= 23) {
            sampleData[i + ":00"] = [generatedValue];
          } else {
            sampleData["00:00"] = [generatedValue];
          }
        }
      }

      let sampleDataHourlyCosts = {};

      hourCounter = 1;
      totalWeeklyEnergy = 0;

      for (const [key, value] of Object.entries(sampleData)) {
        calculatedCost = value * pricePerKwhInput;
        //Conditional statements ensure leading zero is removed after it reaches 10:00 time as a label.
        if (hourCounter >= 1 && hourCounter <= 9) {
          sampleDataHourlyCosts["0" + hourCounter + ":00"] = [calculatedCost];
        } else {
          if (hourCounter >= 9 && hourCounter <= 23) {
            sampleDataHourlyCosts[hourCounter + ":00"] = [calculatedCost];
          } else {
            sampleDataHourlyCosts["00:00"] = [calculatedCost];
          }
        }
        hourCounter += 1;
        totalWeeklyEnergy += parseFloat(value);
      }

      let totalDailyCost = 0;

      //For loop to calculate sum of daily Cost for vehicle.
      for (const [key, value] of Object.entries(sampleDataHourlyCosts)) {
        totalDailyCost += parseFloat(value);
      }

      let totalHourlyAverage = (totalDailyCost / 24).toFixed(2);
      //Calling function to update data.
      updateChartData(sampleData, sampleDataHourlyCosts);
      //Updating HTML elements using calculated values.
      document.getElementById("totalEnergy").innerHTML = parseFloat(
        totalWeeklyEnergy.toFixed(2)
      );
      document.getElementById("totalCost").innerHTML =
        "£" + parseFloat(totalDailyCost.toFixed(2));
      document.getElementById("hourlyAverage").innerHTML =
        "£" + totalHourlyAverage;
    }
  }

  document.addEventListener("click", function (e) {
    const target = e.target.closest(".input-submit");
    console.log(target);

    if (target) {
      loadData();
    }
  });
});
