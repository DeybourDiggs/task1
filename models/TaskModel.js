const mongoose = require('mongoose');

const now = new Date()

const TaskSchema = new mongoose.Schema({
    slack_name:{
        type: String,
        required: true
    },
    current_day:{
        type: String,
    },
    utc_time: {
        type: String,
        date: now,
        offset: now.getTimezoneOffset()
    },
    track: {
        type: String,
    },
    github_file_url:{
        type: String,
    },
    github_source_url:{
        type: String,
    }
})

module.exports = mongoose.model('task', TaskSchema)