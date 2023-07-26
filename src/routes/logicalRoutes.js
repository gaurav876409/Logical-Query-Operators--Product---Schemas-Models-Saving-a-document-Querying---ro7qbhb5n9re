//Logical Operator are:or,and,not,nor
// $and:Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not:Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor:Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or:Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

const router = require('express').Router();
const Product = require('../models/productModels');

//Get all products where price is 2000 or name is 'product1'
router.get('/or', async (req, res) => {
  try {
    //write your code here for Logical '$or' operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//Get all products where price is 2000 and name is 'product1'
router.get('/and', async (req, res) => {
  try {
    //write your code here for Logical '$and' operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//Get all products where price is not greater than 2000 (i.e. less than or equal to 2000)
router.get('/not', async (req, res) => {
  try {
    //write your code here for Logical '$not' operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//Get all products except those where price is 2000 or name is 'product1'
router.get('/nor', async (req, res) => {
  try {
    //write your code here for Logical '$nor' operator
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;
