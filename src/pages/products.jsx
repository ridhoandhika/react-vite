import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/NavBar";
import { DarkMode } from "../context/Darkmode";


//simpan kedalam localstorage

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)

  //set value variable dari hooks login
  useLogin()  
 

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  

  return (
    <>
    <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
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
               
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 mb-3">Cart</h1>
            <TableCart products={products}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
