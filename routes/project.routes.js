const router = require("express").Router();

const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

router.post("/projects", (req, res, next) => {

    const {title, description} = req.body;

    Project.create({title, description, tasks: []})
    .then(response => res.json(response))
    .catch(err => res.json(err))
  });

router.get("/projects", (req,res,next) => {
    Project.find()
    .populate('tasks')
    .then(response => res.json(response))
    .catch(err => res.json(err));
})

router.get("/projects/:projectId", (req,res,next) => {
    const {projectId} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(projectId)){
        res.status(400).json({message: 'Id is invalid'});
        return;
    }

})

module.exports = router;