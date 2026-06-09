export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-hover focus:ring-brand-orange disabled:bg-opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-white text-text-primary border border-border-light hover:bg-gray-50 focus:ring-brand-orange disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:opacity-50'
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
