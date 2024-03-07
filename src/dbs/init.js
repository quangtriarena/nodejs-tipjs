const mongoose = require("mongoose");
const {
	db: { host, name, port },
} = require("../configs/config.mongodb");

const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {
	constructor() {
		this.connect();
	}

	connect(type = "mongodb") {
		switch (type) {
			case "mongodb":
				// dev
				if (1 === 1) {
					mongoose.set("debug", true);
					mongoose.set("debug", { color: true });
				}

				mongoose
					.connect(connectionString)
					.then((_) => {
						console.log("Connect mongo success");
					})
					.catch((error) => {
						console.log("Error connect", error);
					});

				break;

			case "mysql":
				break;

			case "postgres":
				break;

			default:
				console.error("Invalid database type");
				break;
		}
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

const instanceMongoDd = Database.getInstance();

module.exports = instanceMongoDd;
