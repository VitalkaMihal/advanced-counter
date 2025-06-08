
type ButtonProps = {
    title: string
    onClick: () => void
    className?: string
    disabled?: boolean
}

export const Button = ({title, onClick, className, disabled}: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={className}>
            {title}
        </button>
    );
};

