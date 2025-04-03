let mongoose = require('mongoose');
const slugify = require('slugify');

let categorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        required:true
    },
    slug: {
        type: String,
        unique: true
    },
    description:{
        type:String,
        default:""
    }   
},{
    timestamps:true
})

// Middleware để tạo slug trước khi lưu
categorySchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

module.exports = mongoose.model('category',categorySchema);