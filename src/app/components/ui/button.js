export function Button({ children, onClick, variant = "default" }) {
  const base = "px-4 py-2 rounded text-white font-medium shadow";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} bg-[#f3f3f3]`}>
      {children}
    </button>
  );
}
