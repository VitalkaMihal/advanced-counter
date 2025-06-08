import "./styles.css"

type DisplayProps = {
    title: number | string
    error: boolean
}

export const Display = ({title, error}: DisplayProps) => {
    return (
        <div className={error ? "error" : undefined}>
            {title}
        </div>
    );
};
