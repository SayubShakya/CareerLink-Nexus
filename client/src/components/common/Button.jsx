export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const variantClass = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline'
    }[variant] || 'btn-primary';

    return (
        <button
            className={`btn ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
