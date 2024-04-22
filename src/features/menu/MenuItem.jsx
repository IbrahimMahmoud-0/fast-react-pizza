import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className=" flex list-none gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""} `}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p
              className="text-sm font-medium 
            uppercase text-stone-500"
            >
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
