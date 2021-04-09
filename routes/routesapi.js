const router = require("express").Router();




router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
});

router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
});

router.delete("/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
});




module.exports = router;