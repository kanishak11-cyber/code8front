const express = require('express');
const router = express.Router();

const {addProject, getProjects} = require('../controllers/project')

// add a new project : admin (later)
router.post('/project', addProject);

// get all projects
router.get('/projects', getProjects);


module.exports = router;