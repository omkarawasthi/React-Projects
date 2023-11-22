
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./CartItem.css";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="container">

        <div className="imag">
          <img src={item.image} />
        </div>
        <div className="whole">
          <h1 className="title">{item.title}</h1>
          <h1 className="description">{item.description}</h1>
          <div className="price">
            <p>{item.price}</p>
            
            <div  onClick={removeFromCart}>
              <FcDeleteDatabase className="btn" />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
