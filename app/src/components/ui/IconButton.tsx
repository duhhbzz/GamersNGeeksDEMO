import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: LucideIcon;
  label: string;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className = "", icon: Icon, label, type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        aria-label={label}
        className={`inline-flex size-11 items-center justify-center rounded-lg text-text-secondary transition-colors duration-150 hover:bg-surface-highlight hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      >
        <Icon aria-hidden="true" size={22} strokeWidth={2} />
      </button>
    );
  },
);
