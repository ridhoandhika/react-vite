import CardProduct from "../components/Fragments/CardProduct";

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
    id: 2,
    name: "Sneaker New Balance",
    price: 2500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];
const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
