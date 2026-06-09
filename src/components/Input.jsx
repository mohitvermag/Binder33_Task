export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-text-primary tracking-wide">
          {label} {required && <span className="text-brand-orange">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400
          ${error 
            ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
            : 'border-border-light focus:ring-orange-100 focus:border-brand-orange'
          }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}
