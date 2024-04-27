import { Link } from "react-router-dom";

function Button({ disabled = false, children, to, type, onClick }) {
  const base = `text-sm rounded-full bg-yellow-400 font-semibold 
  tracking-wider text-stone-900 transition-colors hover:bg-yellow-300
   focus:outline-none focus:ring focus:ring-yellow-300 
   focus:ring-offset-2 disabled:cursor-not-allowed uppercase
   `;
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-3 text-xs",
    secondary: `text-sm rounded-full border-2 border-stone-300 font-semibold 
  tracking-wider text-stone-400 transition-colors hover:bg-stone-300 hover:text-stone-800
   focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800
   focus:ring-offset-2 disabled:cursor-not-allowed uppercase px-4 py-2.5 md:px-6 md:py-3.5`,
    rounded: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
