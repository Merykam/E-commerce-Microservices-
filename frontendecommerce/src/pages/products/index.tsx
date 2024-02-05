import LayoutHome from '@/components/layout/layoutHome';
import { serviceProduct } from '../api/product';
import { useDispatch } from 'react-redux';
import { addOrderInCart } from '@/redux/features/cart/cartSlice';
// jhdj
const Products = () => {
  const dispatch = useDispatch();
  const serviceproduct = serviceProduct();
  const { products } = serviceproduct;
  const handleAdd = (product: object) => {
    
    dispatch(addOrderInCart(product));
  };
  return (
    <>
      <LayoutHome>
        {/* <!-- Card Section --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {products.map((product) => (
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('')"
                  style={{
                    backgroundImage: `url(${product?.image})`,
                  }}
                >
                  <button
                    onClick={() => handleAdd(product)}
                    type='button'
                    className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {product?.name}
                  </h3>
                  <div>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {product?.description}
                    </p>
                    <div className="mt-1 text-lg font-bold text-gray-500 dark:text-gray-400">
                      {product?.price + ' ' + '$'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- End Card Section --> */}
      </LayoutHome>
    </>
  );
};

export default Products;
