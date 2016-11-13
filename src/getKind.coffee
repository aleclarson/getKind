
getProto = require "getProto"

module.exports = (type) ->
  return unless type = type and type.prototype
  return unless type = getProto type
  return type.constructor
