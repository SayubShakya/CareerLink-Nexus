export default function Button({ children, variant = 'primary', className = '', ...props }) {
    // Using standard CSS classes defined in global.css
    const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';

    return (
        <button
            className={`btn ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
