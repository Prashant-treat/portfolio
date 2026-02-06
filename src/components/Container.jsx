// components/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-4xl mx-auto px-10 w-full ${className}`}>
      {children}
    </div>
  );
}