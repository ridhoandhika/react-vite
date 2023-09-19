import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"/>
        <CardProduct.Body title="Nike Jordan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatibus ab fugiat quae vero rem alias a incidunt, tempora natus
          in perferendis! Quam, perspiciatis? Ipsum nulla at porro dolor! In!
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000"/>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
