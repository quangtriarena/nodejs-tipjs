"use strict";

const ShopModel = require("./src/models/ShopModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const roleShop = {
	SHOP: "SHOP",
	WRITER: "00001", // writer
	EDITOR: "00002", //	editor
	ADMIN: "00000", // admin
};

class AccessService {
	static signUp = async ({ name, email, password }) => {
		try {
			//step 1: check email exist
			const holderShop = await ShopModel.findOne({ email }).learn();

			if (holderShop) {
				return {
					code: "xxx",
					message: "Email already exist",
					status: "error",
				};
			}

			//step 2: create new shop
			const passwordHash = await bcrypt.hash(password, 10);
			const newShop = await ShopModel.create({
				name,
				email,
				password: passwordHash,
				roles: [roleShop.SHOP],
			});

			if (newShop) {
				// created private key and public key
				const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
					modulusLength: 4096,
				});

				console.log("privateKey", privateKey);
				console.log("publicKey", publicKey);
			}
		} catch (error) {
			return {
				code: "xxx",
				message: error.message,
				status: "error",
			};
		}
	};
}

module.exports = AccessService;
