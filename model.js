(function attachModel(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  root.WheelRadiusModel = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function createModel() {
  const HIDDEN_LOAD_N = 60;
  const HIDDEN_AXLE_RADIUS_CM = 2;

  const RADIUS_OPTIONS = [
    { id: "small", label: "Small", radiusCm: 4 },
    { id: "medium", label: "Medium", radiusCm: 8 },
    { id: "large", label: "Large", radiusCm: 12 }
  ];

  function forceNeeded(radiusCm) {
    return HIDDEN_LOAD_N * HIDDEN_AXLE_RADIUS_CM / Number(radiusCm);
  }

  function readingFor(radiusCm) {
    return {
      radiusCm: Number(radiusCm),
      forceN: forceNeeded(radiusCm)
    };
  }

  function mechanicalAdvantageFromForce(forceN) {
    return HIDDEN_LOAD_N / Number(forceN);
  }

  function formatNumber(value) {
    return Number(value).toFixed(1).replace(/\.0$/, "");
  }

  return {
    HIDDEN_LOAD_N,
    HIDDEN_AXLE_RADIUS_CM,
    RADIUS_OPTIONS,
    forceNeeded,
    readingFor,
    mechanicalAdvantageFromForce,
    formatNumber
  };
});
