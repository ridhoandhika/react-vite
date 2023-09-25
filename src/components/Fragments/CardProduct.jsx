import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-3 my-2 flex flex-col jutitfy-between">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </Link>
  );
};

//
const Body = (props) => {
  const { children, name, id } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name && name.substring(0,20)} ...
        </h5>
      </Link>
      <p className="text-m text-white">{ children && children.substring(0,100)} ...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price && price.toLocaleString("id-ID", {
          minimumFractionDigits: 0,
        })}
      </span>
      <Button
        classname="bg-blue-600 text-xs"
        // onClick={() => handleAddToCart(id)}
        onClick={() => dispatch(addToCart({id, qty:1}))} // listen event untuk mentrigger redux
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
