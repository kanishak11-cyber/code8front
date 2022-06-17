const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    techStacks : [{
        type : String,
        required : true
    }],
    projectLink: {
        type : String,
        required : true
    },
    downloadLink: {
        type : String,
        required : true
    },
    category: {
        type: String,
        requored: true
    },
    level: {
        type: String,
        requored: true
    }
});

const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;