const { Joi, Segments, celebrate } = require("celebrate");

module.exports = {
  GetSession() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    });
  },

  NewOng() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    });
  },

  GetIncidents() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  },

  NewIncidents() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(5),
        description: Joi.string().required().min(10),
        value: Joi.number().required(),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  },

  DeleteIncidents() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    });
  },

  GetProfile() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  },
};
