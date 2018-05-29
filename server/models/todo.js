const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

const myCode = new Todo({
  text: '    added     '
})

// myCode.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (err) => {
//   console.log('Failed', err)
// })

module.exports = { Todo }
