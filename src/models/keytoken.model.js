"use strict";

const { Schema, model } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "key";
const COLLECTION_NAME = "keys";

// Declare the Schema of the Mongo model
var keyTokenSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "Shop",
			required: true,
		},

		publicKey: {
			type: String,
			required: true,
		},

		refreshToken: {
			type: Array,
			default: [],
		},
	},
	{
		collection: COLLECTION_NAME,
		timestamps: true,
	}
);

//Export the model
module.exports = model("KeyToken", keyTokenSchema);
