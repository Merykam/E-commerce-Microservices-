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
}
