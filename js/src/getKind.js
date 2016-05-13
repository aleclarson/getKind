var getConstructor, getProto;

getConstructor = require("getConstructor");

getProto = require("getProto");

module.exports = function(type) {
  if (!(type = type && type.prototype)) {
    return;
  }
  if (!(type = getProto(type))) {
    return;
  }
  return getConstructor(type);
};

//# sourceMappingURL=../../map/src/getKind.map
