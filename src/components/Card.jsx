export default function Card({
  children,
  title,
  subtitle,
  className = '',
  headerAction,
  ...props
}) {
  return (
    <div 
      className={`bg-white border border-border-light rounded-lg shadow-xs overflow-hidden ${className}`}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div className="px-5 py-4 border-b border-border-light flex items-center justify-between gap-4">
          <div>
            {title && <h3 className="font-semibold text-text-primary text-base">{title}</h3>}
            {subtitle && <p className="text-xs text-text-secondary mt-0.5">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
