import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "sneaker",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatibus ab fugiat quae vero rem alias a incidunt, tempora natus in perferendis! Quam, perspiciatis? Ipsum nulla at porro dolor! In!,`,
  },
  {
    id: 2,
    name: "Sneaker Nike",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sneaker New Balance",
    price: 2500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

//simpan kedalam localstorage
const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
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
        <div className="w-2/6 px-2">
          {cart.length > 0 && (
            <>
              <h1 className="text-3xl font-bold text-blue-600 mb-3">Cart</h1>
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
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
                  {cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={item.id}
                      >
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-start">
                          {product.name}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {item.qty}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {(item.qty * product.price).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
