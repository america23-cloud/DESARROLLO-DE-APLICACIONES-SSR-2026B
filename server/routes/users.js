import express from 'express';

const usersRouter = express.Router();


/* GET users listing. */
usersRouter.get('/', (req, res, _next) => {
res.send('<h1>Lista de usuarios</h1>');
});

//module.exports = router;
export default usersRouter;
