const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const me = new User({
  email: 'deep@gmail.com'
})

// me.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (err) => {
//   console.log('Failed', err)
// })

module.exports = {User}