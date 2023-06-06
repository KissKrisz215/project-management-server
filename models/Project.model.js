const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
    title: String,
    description: String,
    tasks: [{type: Schema.Types.ObjectId, ref: 'Tasks'}]
})

const Project = model("Project", projectSchema);

module.exports = Project;