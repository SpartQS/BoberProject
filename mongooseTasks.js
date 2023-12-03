var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Bobers = mongoose.model('Bober', { name: String })
var bober = new Bobers({ name: 'Сергей' })
bober.save().then(() => {
    console.log('Привет');
})
.catch((err) => {
console.error(err);
});