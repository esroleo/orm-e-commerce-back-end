const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
  // find and return all categories with associated products
  Category.findAll({
    // include Products
    include: [
      {
        model: Product
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one and return category by its `id` value with associated products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]     
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
