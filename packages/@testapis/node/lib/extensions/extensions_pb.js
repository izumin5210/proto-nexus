// source: extensions/extensions.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var graphql_schema_pb = require('../graphql/schema_pb.js');
goog.object.extend(proto, graphql_schema_pb);
goog.exportSymbol('proto.testapi.extensions.PrefixedEnum', null, global);
goog.exportSymbol('proto.testapi.extensions.PrefixedMessage', null, global);
goog.exportSymbol('proto.testapi.extensions.PrefixedMessage.InnerMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.testapi.extensions.PrefixedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.testapi.extensions.PrefixedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.testapi.extensions.PrefixedMessage.displayName = 'proto.testapi.extensions.PrefixedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.testapi.extensions.PrefixedMessage.InnerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.testapi.extensions.PrefixedMessage.InnerMessage.displayName = 'proto.testapi.extensions.PrefixedMessage.InnerMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.testapi.extensions.PrefixedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.testapi.extensions.PrefixedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.testapi.extensions.PrefixedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.extensions.PrefixedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prefixedEnum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.testapi.extensions.PrefixedMessage}
 */
proto.testapi.extensions.PrefixedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.testapi.extensions.PrefixedMessage;
  return proto.testapi.extensions.PrefixedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.testapi.extensions.PrefixedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.testapi.extensions.PrefixedMessage}
 */
proto.testapi.extensions.PrefixedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 2:
      var value = /** @type {!proto.testapi.extensions.PrefixedEnum} */ (reader.readEnum());
      msg.setPrefixedEnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.testapi.extensions.PrefixedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.testapi.extensions.PrefixedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.testapi.extensions.PrefixedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.extensions.PrefixedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefixedEnum();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.testapi.extensions.PrefixedMessage.InnerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.testapi.extensions.PrefixedMessage.InnerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.testapi.extensions.PrefixedMessage.InnerMessage}
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.testapi.extensions.PrefixedMessage.InnerMessage;
  return proto.testapi.extensions.PrefixedMessage.InnerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.testapi.extensions.PrefixedMessage.InnerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.testapi.extensions.PrefixedMessage.InnerMessage}
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.testapi.extensions.PrefixedMessage.InnerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.testapi.extensions.PrefixedMessage.InnerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string body = 1;
 * @return {string}
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.testapi.extensions.PrefixedMessage.InnerMessage} returns this
 */
proto.testapi.extensions.PrefixedMessage.InnerMessage.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string body = 1;
 * @return {string}
 */
proto.testapi.extensions.PrefixedMessage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.testapi.extensions.PrefixedMessage} returns this
 */
proto.testapi.extensions.PrefixedMessage.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PrefixedEnum prefixed_enum = 2;
 * @return {!proto.testapi.extensions.PrefixedEnum}
 */
proto.testapi.extensions.PrefixedMessage.prototype.getPrefixedEnum = function() {
  return /** @type {!proto.testapi.extensions.PrefixedEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.testapi.extensions.PrefixedEnum} value
 * @return {!proto.testapi.extensions.PrefixedMessage} returns this
 */
proto.testapi.extensions.PrefixedMessage.prototype.setPrefixedEnum = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.testapi.extensions.PrefixedEnum = {
  PREFIXED_ENUM_UNSPECIFIED: 0,
  PREFIXED_FOO: 1,
  PREFIXED_BAR: 2
};

goog.object.extend(exports, proto.testapi.extensions);
