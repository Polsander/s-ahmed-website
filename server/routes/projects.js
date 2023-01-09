const express = require('express');
const router = express.Router();

const projects = require('../controllers/projects')

router.get('/', projects.getAll );
router.get('/:id', projects.getProject);
router.delete('/delete/:id', projects.deleteProject);

module.exports = router;