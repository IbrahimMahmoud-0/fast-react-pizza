import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const numberOfPizzas = useSelector(getTotalCartQuantity);
  const totalPriceOfPizzas = useSelector(getTotalCartPrice);
  return numberOfPizzas ? (
    <div
      className="flex items-center justify-between
     bg-stone-800 px-4 py-3 text-sm
      uppercase text-stone-200 sm:px-6 md:text-base"
    >
      <p
        className="space-x-4 font-semibold text-stone-300
       sm:space-x-6"
      >
        <span>{numberOfPizzas} pizzas</span>
        <span>{formatCurrency(totalPriceOfPizzas)}</span>
      </p>
      <Link
        className="transition-colors duration-300 hover:text-stone-400"
        to="/cart"
      >
        Open cart &rarr;
      </Link>
    </div>
  ) : null;
}

export default CartOverview;
