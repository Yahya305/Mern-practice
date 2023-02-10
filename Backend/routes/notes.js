const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { json } = require("express");

router.post(
  "/postnote",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 2 }),
    body("description", "Enter a valid Description").isLength({ min: 3 }),
    body("author", "Enter a valid author").isLength({ min: 3 }),
    body("tags", "Enter atleast one tag.").isLength({ min: 3 }),
    body("date", "Invalid date.").isDate(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
      }
      const notes = new Notes({ ...req.body, user: req.user.id });
      await notes.save();
      //   console.log(req.body);
      console.log(notes.user);
      res.status(200).json(req.body);
    } catch (error) {
      console.log(error);
    }
  }
);
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    // const notes = await Notes.findById(req.user.id)
    const notes = await Notes.find({ user: req.user.id });
    console.log(notes);
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.put("/updatenote/:note_id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.note_id);
    if (!note) {
      res.status(404).json({ message: "Not Found" });
    }
    const note_uid = note.user;
    if (!req.user.id) {
      res.status(401).json({ message: "Unauthorized Token" });
    }
    if (req.user.id != note_uid.toString()) {
      res.status(401).json({ message: "Unauthorized Token" });
    }
    const newNote = {};
    const { title, description, author, tag } = req.body;
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (author) {
      newNote.author = author;
    }
    if (tag) {
      newNote.tag = tag;
    }
    note = await Notes.findByIdAndUpdate(
      req.params.note_id,
      { $set: newNote },
      { new: true }
    );
    // note.save();
    res.status(200).json({ note });
  } catch (error) {
    console.log(error);
  }
});
router.delete("/deletenote/:note_id", fetchuser, async (req, res) => {
  try {
    if (!req.params.note_id) {
      res.status(404).json({ error: "Note Not Found." });
    }
    const deleteNote = await Notes.findById(req.params.note_id);
    if (deleteNote.user.toString() != req.user.id) {
      res.status(401).json({ error: "Invalid Token." });
    }
    const deletedNote = await Notes.findByIdAndDelete(req.params.note_id);
    res.status(200).json({ deletedNote });
  } catch (error) {
	res.status(500).json("Internal Server Error");
  }
});
module.exports = router;
// module.exports =(req, res) => {
//     obj={
//         name: 'Google',
//         age:19
//     }
//     // res.send('Handling the /api/auth endpoint');
//     res.json(obj)
// };
