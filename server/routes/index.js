import express from 'express';

const indexRouter = express.Router();

let counter=0;
const numbers = []

/* GET home page. */
indexRouter.get('/', (req, res, _next) => {
  counter += 1;
  numbers.push(counter);
  res.render('index', { 
    title: 'America Ortiz',
    counter,
    numbers
  });
});

//module.exports = indexRouter;
export default indexRouter;
