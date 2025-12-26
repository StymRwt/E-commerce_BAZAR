
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"


// cod

const placeOrder=async(req,res)=>{

    try {
        const {userId,items,amount,address}=req.body
        const orderData ={
            userId,
            items,
            amount,
            paymentMethod:'COD',
            address,
            payment:false,
            date:Date.now()
        }
        const newOrder= new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Place'})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }


}



// stripe

const placeOrderStripe=async(req,res)=>{
    
}



// razorpay

const placeOrderRazorPay=async(req,res)=>{
    
}



// all order from admin pannel

const allOrder=async(req,res)=>{
    
}



// user order from frontend

const userOrder=async(req,res)=>{
    
}



//update status


const updateStatus=async(req,res)=>{
    
}




export{placeOrder,placeOrderRazorPay,placeOrderStripe,allOrder,updateStatus,userOrder}