const Sequelize = require("sequelize");
const sequelize = require("../database/connect.js");

const Gig = sequelize.define(
  "gig",
  {
    title: {
      type: Sequelize.STRING,
    },
    technologies: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    budget: {
      type: Sequelize.STRING,
    },
    contact_email: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: true }
);

module.exports = Gig;
