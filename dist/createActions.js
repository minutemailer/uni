"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createActions = function createActions(actions) {
  var mappedActions = {};
  actions.forEach(function (action) {
    mappedActions[action] = {
      method: "on".concat(action.charAt(0).toUpperCase() + action.slice(1)),
      events: {
        init: "".concat(action, ".init"),
        done: "".concat(action, ".done"),
        error: "".concat(action, ".error")
      }
    };
  });
  return mappedActions;
};

var _default = createActions;
exports.default = _default;