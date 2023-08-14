const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll();
    //check if got data
    if(!categoryData){
      res.status(404).json({ message: 'Could not find category data!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id);
    //check if got data
    if(!categoryData){
      res.status(404).json({ message:'No user with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);
    // 200 means it was successful
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    //400 is bad request error
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!categoryData[0]){
      res.status(404).json({ message:'No user with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.delete(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!categoryData){
      res.status(404).json({ message:'No user with this id!' });
      return;
    }
    // 200 means it was successful
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    //500 is generic error
    res.status(500).json(err);
  }
});

module.exports = router;
