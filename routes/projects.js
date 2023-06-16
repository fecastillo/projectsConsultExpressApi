var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();


router.get('/', (req, res) => {
  projects.sort((a, b) => a.id - b.id);
  res.status(200).json(projects);
});

router.get('/active', (req, res) => {
    const activeProjects = projects.filter(p => p.isActive);
    activeProjects.sort((a, b) => a.id - b.id);
    res.status(200).json(activeProjects);
  });

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: 'No Project Found' });
  }
});



module.exports = router;
