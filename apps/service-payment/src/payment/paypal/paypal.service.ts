import { Injectable } from '@nestjs/common';
const paypal = require('paypal-rest-sdk');
@Injectable()
export class PaypalService {
async paypalPayment(orderId: number,order:any) {
    try {
      // const order = await this.getOrder(orderId);
      // const paymentData: any = {
      //   orderId: order.id,
      //   amount: order.cart.totalprice,
      //   methodPayment: "Paypal",
      // };
      
      
      paypal.configure({
        mode: 'sandbox',
        client_id: 'Ad80uyYqrBtJNO8xk0UkHwYeYVvdjv26cZyOEo_1JK5HwAKApru8yakNAh7zV8q6MnjETlUjQKVZj5u-',
        client_secret: 'EHwhdHouzKMjo3eCEqSLsEQs_lPP8nrW9iq49tiB3EOG8iLRk0hlJYdKUnJK46SlwUb_PdEMBLYtEZ9H',
      });
      // const amount= order!.cart.totalprice;
      const create_payment_json = {
        "intent": "sale",
        "payer": {
          "payment_method": "paypal",
        },
        "redirect_urls": {
          "return_url": `http://localhost:3003/payment/success?orderId=${orderId}`,
          "cancel_url": "http://localhost:3003/payment/cancel",
        },
        "transactions": [{
          // "item_list": {
          //   "items": [{
          //     "name": "item",
          //     "sku": "001",
          //      "price": amount,
          //     "currency": "USD",
          //     "quantity": 1, 
          //   }],
          // },
          "amount": {
            "currency": "USD",
             "total": order!.cart.totalprice,
          },
          "description": "This is the payment description.",
        }],
      };
      
      const payment:any = await new Promise((resolve, reject) => {
        paypal.payment.create(create_payment_json, (error: any, payment: any) => {
          if (error) {
            reject(error.response ? error.response : error.message);
          } else {
           for(let i=0;i<payment.links.length;i++){
             if(payment.links[i].rel==='approval_url'){
               resolve(payment.links[i].href);
              }
            }
          }
        });
      });
      
      console.log("Create Payment Response");
      return payment;
      
    } catch (error) {
      console.error("Error in paypalPayment:", error);
    }
  }

  async executePaymentPaypal(paymentId: string, PayerID: string,order:any) {
    console.log(paymentId,"ddddd", PayerID)
    // const amount=Math.round( order!.cart.totalprice * 100);
    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: order!.cart.totalprice, 
          },
        },
      ],
    };
  
    try {
      paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
          console.error('Error executing PayPal payment:', error.response ? error.response.data : error.message);
          throw error;
        } else {
          console.log('Get Payment Response');
          if (payment) {
            console.log(JSON.stringify(payment));
            return payment;
          } else {
            console.error('Payment object is undefined');
          }
        }
      });
    } catch (error) {
      console.error('Error executing PayPal payment:', error.response ? error.response.data : error.message);
    }
  }
}
