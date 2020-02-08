const mongoose=require('mongoose');

var childGradeSchema=mongoose.Schema({
			
	date :Date,
	grade: String, 
	score: Number

});
 
const restaurantSchema=mongoose.Schema({
	 
    _id:mongoose.Schema.Types.ObjectId,
    address: 
		{
			building:String, 
			coord: [Number], 
			street: String, 
			zipcode: String
		},

	borough: String, 
	cuisine: String,
	grades: [childGradeSchema], 
	name: String, 
	restaurant_id: String, 
    
});
 
module.exports=mongoose.model('Restaurants', restaurantSchema);
