const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    nom : {
        type : String,
        require: true,
    },
    lastName:  {
        type : String,
        require: true,
    },
    Age: {
    type : Number,
    },

})
module.exports = mongoose.model("User",UserSchema)