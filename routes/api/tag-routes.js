const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    //check if got data
    if(!tagData){
      res.status(404).json({ message: 'Could not find tag data!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    //check if got data
    if(!tagData){
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const tagData = await Tag.create(req.body);
    // 200 means it was successful
    res.status(200).json(tagData);
  } catch (err){
    console.log(err);
    //400 is bad request
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!tagData[0]){
      res.status(404).json({ message:'No tag with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!tagData){
      res.status(404).json({ message:'No tag with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

module.exports = router;
