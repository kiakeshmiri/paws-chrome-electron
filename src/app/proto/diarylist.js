/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.pawsgrpc.DiaryList');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pawsgrpc.Diary');


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
proto.pawsgrpc.DiaryList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pawsgrpc.DiaryList.repeatedFields_, null);
};
goog.inherits(proto.pawsgrpc.DiaryList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pawsgrpc.DiaryList.displayName = 'proto.pawsgrpc.DiaryList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pawsgrpc.DiaryList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pawsgrpc.DiaryList.prototype.toObject = function(opt_includeInstance) {
  return proto.pawsgrpc.DiaryList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pawsgrpc.DiaryList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pawsgrpc.DiaryList.toObject = function(includeInstance, msg) {
  var f, obj = {
    diariesList: jspb.Message.toObjectList(msg.getDiariesList(),
    proto.pawsgrpc.Diary.toObject, includeInstance)
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
 * @return {!proto.pawsgrpc.DiaryList}
 */
proto.pawsgrpc.DiaryList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pawsgrpc.DiaryList;
  return proto.pawsgrpc.DiaryList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pawsgrpc.DiaryList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pawsgrpc.DiaryList}
 */
proto.pawsgrpc.DiaryList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pawsgrpc.Diary;
      reader.readMessage(value,proto.pawsgrpc.Diary.deserializeBinaryFromReader);
      msg.addDiaries(value);
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
proto.pawsgrpc.DiaryList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pawsgrpc.DiaryList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pawsgrpc.DiaryList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pawsgrpc.DiaryList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pawsgrpc.Diary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Diary diaries = 1;
 * @return {!Array<!proto.pawsgrpc.Diary>}
 */
proto.pawsgrpc.DiaryList.prototype.getDiariesList = function() {
  return /** @type{!Array<!proto.pawsgrpc.Diary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pawsgrpc.Diary, 1));
};


/** @param {!Array<!proto.pawsgrpc.Diary>} value */
proto.pawsgrpc.DiaryList.prototype.setDiariesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pawsgrpc.Diary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pawsgrpc.Diary}
 */
proto.pawsgrpc.DiaryList.prototype.addDiaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pawsgrpc.Diary, opt_index);
};


proto.pawsgrpc.DiaryList.prototype.clearDiariesList = function() {
  this.setDiariesList([]);
};


