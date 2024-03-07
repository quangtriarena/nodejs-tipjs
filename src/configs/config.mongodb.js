"use strict";

const DEV = {
	app: {
		port: process.env.DEV_APP_PORT || 3052,
	},
	db: {
		host: process.env.DEV_APP_HOST || "localhost",
		port: process.env.DEV_DB_PORT || "27017",
		name: process.env.DEV_DB_NAME || "shopDev",
	},
};

const PROD = {
	app: {
		port: process.env.PROD_APP_PORT,
	},
	db: {
		host: process.env.PROD_DB_HOST,
		port: process.env.PROD_DB_PORT,
		name: process.env.PROD_DB_NAME,
	},
};
const config = { DEV, PROD };
const env = process.env.NODE_ENV || "DEV";

module.exports = config[env];
