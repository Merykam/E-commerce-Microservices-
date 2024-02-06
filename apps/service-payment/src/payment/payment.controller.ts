import { Body, Controller, Get, Post, Query, Redirect, Req, Res} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { StripeService } from './stripe/stripe.service';
import { PaypalService } from './paypal/paypal.service';


@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService,private readonly stripService:StripeService,private readonly paypalService:PaypalService) {}

  

  @Post('stripe')
  async stripMethode(@Body() body: any, @Res() res){
    console.log(body,"body")
    const {token,product,orderId}=body;

    const  order = await this.paymentService.getOrder(orderId);
    if(!order){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order not found')
      throw new Error('Order not found')
    }
    if(order.status !=='Pending'){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order has been paid')
      throw new Error('Order has been paid')
    }
    const payment = await this.paymentService.findPaymentByOrderId(orderId);
    if(payment){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order has been paid')
      throw new Error('Order has been paid')
    }
    const amount=Math.round( order.cart.totalprice * 100);
    const {id} = await this.stripService.createStripePaymentMethod(token.id);
    // console.log(id,"id");
    const paymentIntent = await this.stripService.createPaymentIntent(amount, id);
    // console.log(paymentIntent,"paymentIntent")
    if(paymentIntent.status === 'succeeded'){
      const updateOrder=await this.paymentService.updateOrder(order);
      const createPayment=await this.paymentService.createPayment(order,'Stripe');
      console.log(updateOrder,"updateOrder");
    }
    return res.json({'paymentStatus':paymentIntent.status});
  }
  @Post('paypal')
  async getOrder(@Req() req ,@Res() res  ) {
    const orderId = req.body.orderId;
    // console.log(orderId,"orderId")
    const  order = await this.paymentService.getOrder(orderId);
    if(!order){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order not found')
      throw new Error('Order not found')
    }
    if(order.status !=='Pending'){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order has been paid')
      throw new Error('Order has been paid')
    }
    const payment = await this.paymentService.findPaymentByOrderId(orderId);
    if(payment){
      // return res.redirect('http://localhost:3000/payments/fail?message=Order has been paid')
      throw new Error('Order has been paid')
    }
    // console.log(req.body,"req");
    const amount=Math.round( order.cart.totalprice * 100);
    const url = await this.paypalService.paypalPayment(orderId,order);
    console.log(url,"url")
     return res.json({'url':url});
  }
@Get('success') 
// @Redirect('http://localhost:3000/payment/success');
async success(@Query('paymentId') paymentId:string,@Query('PayerID') PayerID:string,@Query('orderId') orderId:string,@Res() res  ) {
  const orderIdInt= parseInt(orderId)
  const  order:any = await this.paymentService.getOrder(orderIdInt);
  const executeOrder:any = await this.paypalService.executePaymentPaypal(paymentId,PayerID,order);
   console.log(executeOrder.httpStatusCode,"executeOrder");
   if(executeOrder.httpStatusCode === 200){
    const updateOrder=await this.paymentService.updateOrder(order);
    const createPayment=await this.paymentService.createPayment(order,'PayPal');
    if(updateOrder && createPayment){
      return res.redirect('http://localhost:3000/payments/success');
    }
  }
  return res.redirect('http://localhost:3000/payments/fail');
}
}