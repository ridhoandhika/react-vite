import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";

//simpan kedalam localstorage

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([])

  //set value variable dari hooks login
  const username = useLogin()  

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);  

  //trigger update total setelah event add to cart di jalankan
  // menghitung total keseluruhan
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + item.qty * product.price;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    //cari id yang sudah ada di dalam cart, jika ada ubah qty nya
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header id={product.id} image={product.image} />
              <CardProduct.Body  id={product.id} name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          {cart.length > 0 && (
            <>
              <h1 className="text-3xl font-bold text-blue-600 mb-3">Cart</h1>
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500 table-auto">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-gray-200">
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 && cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={item.id}
                      >
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-start">
                          {`${product.title.substring(0,10)}...`}
                        </td>
                        <td className="flex justify-between whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-end">
                          <span>Rp.</span>
                          <span>
                            {product.price.toLocaleString("id-ID", {
                              minimumFractionDigits: 0,
                            })}
                          </span>
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {item.qty}
                        </td>
                        <td className="flex justify-between whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-end">
                          <span>Rp.</span>
                          <span>
                            {(item.qty * product.price).toLocaleString(
                              "id-ID",
                              {
                                minimumFractionDigits: 0,
                              }
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="border-r px-6 py-4 dark:border-neutral-500 font-bold text-start"
                      colSpan={3}
                      rowSpan={1}
                    >
                      Total
                    </th>
                    <th
                      className="flex justify-between whitespace-nowrap border-r px-6 py-4 font-bold dark:border-neutral-500 text-end"
                      colSpan={1}
                      rowSpan={1}
                    >
                      <span>Rp.</span>
                      <span>
                        {totalPrice.toLocaleString("id-ID", {
                          minimumFractionDigits: 0,
                        })}
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
