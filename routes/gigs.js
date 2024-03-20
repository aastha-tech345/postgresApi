const express = require("express");
const router = express.Router();
const Gig = require("../model/gig.js");

// GET all gigs
router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    res.status(200).json({
      status: 200,
      message: "post find successfully",
      data: gigs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST a new gig
router.post("/", async (req, res) => {
  const { title, technologies, description, budget, contact_email } = req.body;

  try {
    const gig = await Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email,
    });
    res.status(201).json({
      status: 201,
      message: "post created successfully",
      data: gig,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT update a gig
router.put("/:id", async (req, res) => {
  const { title, technologies, description, budget, contact_email } = req.body;

  try {
    let gig = await Gig.findByPk(req.params.id);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    gig.title = title;
    gig.technologies = technologies;
    gig.description = description;
    gig.budget = budget;
    gig.contact_email = contact_email;

    await gig.save();

    res.status(201).json({
      status: 201,
      message: "post updated successfully",
      data: gig,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE a gig
router.delete("/:id", async (req, res) => {
  try {
    const gig = await Gig.findByPk(req.params.id);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    await gig.destroy();
    res.status(200).json({
        status: 200,
        message: "post deleted successfully"
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
