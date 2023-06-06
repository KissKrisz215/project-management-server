const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: String,
    description: String,
    project: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

const Task = model("Tasks", taskSchema);

module.exports = Task;