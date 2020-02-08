const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const restaurants=require('../model/restaurant');

router.get('/',(req,res,next)=>{
    restaurants.find()
    .limit(150)
    .select('id address borough name cuisine')
    .exec()
    .then(restos=>{
        console.log()
         const reponse={
             count:restos.length,
             restaurants:restos.map(restos=>{
                return {
                    restaurantsId:restos._id,
                    name:restos.name,
                    address:restos.address,
                    borough:restos.borough,
                    request:{
                        type:'GET',
                        url:'http://localhost:3333/restaurants/'+restos._id
                    }

                }
             })
             
         };
       // if(doc.length>=0){
            res.status(200).json(reponse);
       // }else {
         //   res.status(404).json({
           //     message:'Not entries found'
            //});
       // }
       
    })
    .catch( err=>{
        console.log(err)
        res.status(500).json({error:err})

    });
});




router.get('/:restaurantsId',(req,res,next)=>{
    const id=req.params.restaurantsId;
    restaurants.findById(id)
    .exec()
    .then(restos=>{
        console.log(restos)
        if(restos){
            res.status(200).json({
                request:{
                    type:'GET',
                    description:'Get all restaurants',
                    url:'http://localhost:3333/restaurants'
                },
                restaurants:restos
                
            })
            
        }else{
            res.status(404).json({message:"No valid id entry"});
        }
        })
    .catch( err=>{
        console.log(err)
        res.status(500).json({error:err})

    });
    
});



module.exports=router;