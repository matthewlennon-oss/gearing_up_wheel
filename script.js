(function bootSpinner() {
  const model = window.WheelRadiusModel;
  const state = {
    radiusCm: 8,
    hasReading: false
  };

  const scale = 14;
  const center = { x: 275, y: 210 };
  const ui = {
    options: Array.from(document.querySelectorAll(".radius-option")),
    spinButton: document.getElementById("spinButton"),
    rotor: document.getElementById("rotor"),
    wheel: document.getElementById("wheel"),
    spokeOne: document.getElementById("spokeOne"),
    spokeTwo: document.getElementById("spokeTwo"),
    rimDot: document.getElementById("rimDot"),
    wheelLabel: document.getElementById("wheelLabel"),
    forceReading: document.getElementById("forceReading"),
    readingPrompt: document.getElementById("readingPrompt"),
    radiusReading: document.getElementById("radiusReading")
  };

  function setLine(line, x1, y1, x2, y2) {
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
  }

  function renderWheel() {
    const wheelPx = state.radiusCm * scale;
    ui.wheel.setAttribute("r", wheelPx);
    setLine(ui.spokeOne, center.x - wheelPx, center.y, center.x + wheelPx, center.y);
    setLine(ui.spokeTwo, center.x, center.y - wheelPx, center.x, center.y + wheelPx);
    ui.rimDot.setAttribute("cx", center.x + wheelPx);
    ui.rimDot.setAttribute("cy", center.y);
    ui.wheelLabel.setAttribute("x", center.x + wheelPx + 24);
    ui.wheelLabel.setAttribute("y", center.y - wheelPx * 0.65);
  }

  function renderReading() {
    const data = model.readingFor(state.radiusCm);
    ui.radiusReading.textContent = `${data.radiusCm} cm`;

    if (state.hasReading) {
      ui.forceReading.textContent = `${model.formatNumber(data.forceN)} N`;
      ui.forceReading.hidden = false;
      ui.readingPrompt.hidden = true;
    } else {
      ui.forceReading.hidden = true;
      ui.readingPrompt.hidden = false;
      ui.readingPrompt.textContent = "Spin the wheel to take a reading.";
    }
  }

  function renderOptions() {
    ui.options.forEach((button) => {
      const selected = Number(button.dataset.radius) === state.radiusCm;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function render() {
    renderOptions();
    renderWheel();
    renderReading();
  }

  function selectRadius(radiusCm) {
    state.radiusCm = Number(radiusCm);
    state.hasReading = false;
    render();
  }

  function spinWheel() {
    state.hasReading = false;
    renderReading();
    ui.spinButton.disabled = true;
    ui.rotor.classList.remove("is-spinning");
    void ui.rotor.offsetWidth;
    ui.rotor.classList.add("is-spinning");
  }

  ui.options.forEach((button) => {
    button.addEventListener("click", () => selectRadius(button.dataset.radius));
  });

  ui.spinButton.addEventListener("click", spinWheel);

  ui.rotor.addEventListener("animationend", () => {
    ui.rotor.classList.remove("is-spinning");
    state.hasReading = true;
    ui.spinButton.disabled = false;
    renderReading();
  });

  render();
})();
