import { Body, Controller, Get, Post, Query, Req, Res} from '@nestjs/common';
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
      throw new Error('Order not found')
    }
    if(order.status !=='Pending'){
      throw new Error('Order has been paid')
    }
    const payment = await this.paymentService.findPaymentByOrderId(orderId);
    if(payment){
      throw new Error('Order has been paid')
    }
    const amount=Math.round( order.cart.totalprice * 100);
    const {id} = await this.stripService.createStripePaymentMethod(token.id);
    console.log(id,"id");
    const paymentIntent = await this.stripService.createPaymentIntent(amount, id);
    console.log(paymentIntent,"paymentIntent")
    if(paymentIntent.status === 'succeeded'){
      const updateOrder=await this.paymentService.updateOrder(order);
      const createPayment=await this.paymentService.createPayment(order,'Stripe');
      console.log(updateOrder,"updateOrder");
    }
    return res.json({'paymentStatus':paymentIntent.status});
  }
  @Post('paypal')
  async getOrder(@Req() req ,@Res() res  ) {
    console.log(req.body,"req");
    const url = await this.paypalService.paypalPayment(2);
    console.log(url,"url")
     return res.json({'url':url});
  }
// @Get('success')
// async success(@Query('paymentId') paymentId:string,@Query('PayerID') PayerID:string,@Res() res  ) {
//   const order = await this.paymentService.executePaymentPaypal(paymentId,PayerID);
//   res.redirect('http://localhost:3003/sevice-payment');
// }
}