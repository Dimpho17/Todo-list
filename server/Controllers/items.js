const item = require('../model/items')


exports.createItem = async (req, res, next) => {
    const { title, description } = req.body
    if (title.length < 4) {
      return res.status(400).json({ message: "Title cannot be empty" })
    }
    try {
      await item.create({
        title,
        description,
      }).then(item =>
        res.status(200).json({
          message: "items successfully created",
          item,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "items not created",
        error: error.mesage,
      })
    }
  }

exports.updateItem = async (req, res) => {
    try {
      const item = await item.findById(req.params.id, req.body);
      res.json({ data: item, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

   
  exports.deleteItem = async (req, res, next) => {
    const { id } = req.body
    await item.findById(id)
      .then(user => user.remove())
      .then(user =>
        res.status(201).json({ message: "item successfully deleted", user })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      )
  }