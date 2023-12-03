var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var schema = mongoose.Schema({ name: String })

schema.methods.taste = function(){
    console.log(this.get("name") + " Бобер красивый")
    }    

var Bober = mongoose.model('Сергей', schema)
var Bobers = new Bober({ name: 'Сергей' })

Bobers.save().then(() => {
    Bobers.taste();
    console.log('Привет');
})
.catch((err) => {
console.error(err);
});