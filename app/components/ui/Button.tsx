interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-custom-dark text-white hover:bg-custom-medium focus:ring-custom-medium transition-colors",
    secondary: "bg-custom-medium text-white hover:bg-custom-dark focus:ring-custom-light",
    outline:
      "border-2 border-custom-lighter text-custom-dark hover:border-custom-medium focus:ring-custom-medium",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
