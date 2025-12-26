import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

import { placeOrder,placeOrderRazorPay,placeOrderStripe,allOrder,updateStatus,userOrder } from '../controllers/orderController.js'

const orderRouter=express.Router()

orderRouter.post('/list',adminAuth,allOrder)
orderRouter.post('/status',adminAuth,updateStatus)


orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorPay)


orderRouter.post('/userorder',authUser,userOrder)

export default orderRouter

