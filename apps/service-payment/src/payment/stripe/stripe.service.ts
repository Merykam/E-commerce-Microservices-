import { Injectable } from '@nestjs/common';
const stripe = require('stripe')('sk_test_51OU9KPIbWimGzaSpkiU2vKX6nkMc6Kx262DSWcFB8PVXWxxIj2azJANGwvyKtBPhNrvMmjks2dk8rZ1hH0gmnd1900HZ2jSntB')
@Injectable()
export class StripeService {
  async createStripePaymentMethod(token: any) {
    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          token: token,
        },
      });

      return paymentMethod;
    } catch (error) {
      console.error('Error creating PaymentMethod:', error.message);
      throw error;
    }
  }
  async createPaymentIntent(amount: number, paymentMethodId: string) {
    try {
      const paymentIntent = stripe.paymentIntents.create({
        amount: amount,
        currency: 'USD',
        payment_method: paymentMethodId,
        confirm: true,
        return_url: 'http://localhost:3003/success',
      });
      return paymentIntent;
    } catch (error) {
      console.error('Error creating PaymentIntent:', error.message);
      throw error;
    }
  }
}
