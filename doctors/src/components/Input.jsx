export default function Input({ type, name, id, ref, onChange, value }) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            ref={ref}
            onChange={onChange}
            value={value}
        />
    )
}