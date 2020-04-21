const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const Validation = require("./utils/validationRoute");

const routes = express.Router();

//Session
routes.post("/sessions", Validation.GetSession(), SessionController.create);

//Ong
routes.get("/ongs", OngController.index);
routes.post("/ongs", Validation.NewOng(), OngController.create);

//Incident
routes.get("/incidents", Validation.GetIncidents(), IncidentController.index);
routes.post("/incidents", Validation.NewIncidents(), IncidentController.create);

routes.delete(
  "/incidents/:id",
  Validation.DeleteIncidents(),
  IncidentController.delete
);

//Profile
routes.get("/profile", Validation.GetProfile(), ProfileController.index);

module.exports = routes;
