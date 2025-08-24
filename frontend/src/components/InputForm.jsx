import styles from "./InputForm.module.css"

function InputForm({ isLabel = false, label, placeholder, name, register, errors }) {
    return (
        <span>

            {
                isLabel &&
                <label htmlFor="">{label} &nbsp;
                    {
                        errors[name] &&
                        <span style={{ fontSize: "15px", color: "red" }}>{errors[name].message}</span>
                    }
                </label>
            }
            <input className={styles.input} type="text" name={name}
                {...register(name)}
                placeholder={placeholder} />
        </span>

    )
}

export default InputForm