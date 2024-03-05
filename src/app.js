const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

//#region [init middleware package express]
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// morgan("combined");
// morgan("common");
// morgan("short");
// morgan("tiny");
//#endregion

// init db

//#region [init router]
app.use("/", (req, res, next) => {
	return res.status(200).json({
		message: "hello",
	});
});
//#endregion

// handle error
module.exports = app;
