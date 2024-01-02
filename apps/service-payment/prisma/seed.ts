import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    
    const customer1 = await prisma.customer.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });

    const customer2 = await prisma.customer.create({
      data: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
      },
    });

    
    const product1 = await prisma.product.create({
      data: {
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 9.99,
      },
    });

    const product2 = await prisma.product.create({
      data: {
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 19.99,
      },
    });

    
    const cart1 = await prisma.cart.create({
      data: {
        productId: product1.id,
        totalprice: product1.price,
      },
    });

    const cart2 = await prisma.cart.create({
      data: {
        productId: product2.id,
        totalprice: product2.price,
      },
    });

   
    const order1 = await prisma.order.create({
      data: {
        cartId: cart1.id,
        customerId: customer1.id,
        status: 'Paid',
      },
    });

    const order2 = await prisma.order.create({
      data: {
        cartId: cart2.id,
        customerId: customer2.id,
        status: 'Pending',
      },
    });

  
    await prisma.payment.createMany({
      data: [
        {
          orderId: order1.id,
          amount: cart1.totalprice,
          methodId: 'PayPal',
          stripeSessionId: 'stripe_session_id_1',
        },
        {
          orderId: order2.id,
          amount: cart2.totalprice,
          methodId: 'Stripe',
          stripeSessionId: 'stripe_session_id_2',
        },
      ],
    });

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
