import LayoutHome from '@/components/layout/layoutHome';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux/features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state?.cart?.shoppingCart);

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };

  const handleDncrement = (id: number) => {
    dispatch(decrement(id));
  };

  return (
    <>
      <LayoutHome>
        <div className="bg-gray-100 h-screen py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((product) => (
                        <tr>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={product.image}
                                alt="Product image"
                              />
                              <span className="font-semibold">
                                {product.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">${product.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleDncrement(product.id)}
                                className="border rounded-md py-2 px-4 mr-2"
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {product.qnt}
                              </span>
                              <button
                                onClick={() => handleIncrement(product.id)}
                                className="border rounded-md py-2 px-4 ml-2"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            ${product.price * product.qnt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>
                      $
                      {cart
                        .reduce((total, product) => {
                          return total + product.price * product.qnt;
                        }, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>$1.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      $
                      {cart
                        .reduce((total, product) => {
                          return total + product.price * product.qnt + 1.99;
                        }, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutHome>
    </>
  );
};

export default Cart;
