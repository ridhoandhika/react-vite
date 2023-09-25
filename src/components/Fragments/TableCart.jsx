import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

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
  return (
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
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr className="border-b dark:border-neutral-500" key={item.id}>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-start">
                  {`${product.title.substring(0, 10)}...`}
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
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      minimumFractionDigits: 0,
                    })}
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
  );
};

export default TableCart;
