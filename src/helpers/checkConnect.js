"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//#region [check count connection to database]
const countConnection = () => {
	const numberConnections = mongoose.connections.length;

	console.log(`Number connection ${numberConnections}`);
};
//#endregion

// ----------------------------------------------------------

//#region [check overload connection]
const checkOverloadConnections = () => {
	setInterval(() => {
		const numberConnections = mongoose.connections.length;
		const numCores = os.cpus().length;
		const memoryUsage = process.memoryUsage().rss;

		// example maximum number of connections base on number of cores
		console.log("Active connection", numberConnections);
		console.log(`Memory usage ${memoryUsage / 1024 / 1024} MB`);

		const maxConnections = numCores * 5;

		if (numberConnections > maxConnections) {
			console.log("Overload detected !");
		}
	}, _SECONDS);
};
//#endregion

module.exports = { checkOverloadConnections, countConnection };
