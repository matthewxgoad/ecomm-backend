const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((data) => {
    Category.findAll({include: [Product]})
      res.json(data);
    }).catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then((data) => {
    Category.findAll({include: [Product]})
    res.json(data);
  })  .catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    res.json(category);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((category) => {
      res.json(category);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
