import View from "./view.js";

class VehicleView extends View {
  _parentElement = document.querySelector(".insights");
  _header = document.querySelector(".main-header");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateHeader() {
    return `Dashboard`;
  }

  _generateMarkup() {
    return `
              <div class="vehicle" id="vehicle">
				<div class="top">
					<div class="image">
						<img src="${this._data.img}" />
					</div>
					<div class="details">
						<div class="vehicle-details">
							<h1>${this._data.name}</h1>
							<div>
								<h3>Top Speed: ${this._data.topSpeed}</h3>
								<h3>Battery capacity:${this._data.batteryCapacity}</h3>
								<h3>Effiency: ${this._data.efficiency}</h3>
								<h3>Horse power: ${this._data.horsePower}</h3>
								<h3>Range: ${this._data.range}</h3>
								<h3>Charge time: ${this._data.chargeTime}</h3>
							</div>
						</div>
						<div class="reportData">
							<h1 id="reportDataTitle">Data Report Calculations:</h1>
							<h3>Total Energy Used For Day (Kwh): <span id="totalEnergy"></span></h3>
							<h3>Total Energy Cost For Day: <span id="totalCost"></span></h3>
							<h3>Average Cost Per Hour: <span id="hourlyAverage"></span></h3>
		
							<div class="inputForm">
								<div class="input input-date">
									<input type="date" id="date">
								</div>
		
								<div class="input input-price">
									<input class="input-price-per-kwh" type="number" id="pricePerKwh" step="0.01"
										placeholder="£/Kwh" min="0.25" max="0.60"></input>
								</div>
								<div class="input input-submit">
									<input class="submit-report" type="submit" value="">
									<span class="material-symbols-sharp">
										lab_profile
									</span>
									</input>
								</div>
							</div>
						</div>
					</div>
					<div class="chartBox">
						<div class="lineChart">
							<canvas id="myChart"></canvas>
						</div>
					</div>
				</div>
			</div>
    `;
  }
}

export default new VehicleView();
