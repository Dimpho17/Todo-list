const Item = require("../model/items");

exports.createItem = async (req, res, next) => {
  const { title, description } = req.body;
  if (title.length < 4) {
    return res.status(400).json({ message: "Title cannot be empty" });
  }
  try {
    await Item
      .create({
        title,
        description,
      })
      .then((item) =>
        res.status(200).json({
          message: "items successfully created",
        })
      );
  } catch (err) {
    res.status(401).json({
      message: "items not created",
    
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body,{
    new: true, 
    })
    res.json({ data: Item, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.read = async (req, res) => {
  try  {
  const items = await Item.find();
  res.json(items);
   } catch (error) {
    res.status(500).json({ error: error})
  
  }
}