var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PackageModel = new Schema({  //defining a schema and assigning a model prototype
    TypeofPackage: {type: String},
    Equipment: [{type:Schema.Types.ObjectId,ref:'Accesories'}],
    BasicCost: {type: Number,default:400},
    ForNoOFPeople: {type: Number}
});

module.exports= mongoose.model('Packages', PackageModel);
