var getProto;

getProto = require("getProto");

module.exports = function(type) {
  if (!(type = type && type.prototype)) {
    return;
  }
  if (!(type = getProto(type))) {
    return;
  }
  return type.constructor;
};

//# sourceMappingURL=../../map/src/getKind.map
