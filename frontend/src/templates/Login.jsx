
import { useNavigate } from "react-router-dom"
import InputForm from "../components/InputForm"
import { logInFormData } from "../constants/inputData"
import { useLogInFormData } from "../context/LogInContext"
import { api } from "../services/api"
import styles from "./Signup.module.css"
import { getToken, setToken } from "../utils/tokenHandler"

function Login() {
    const { register, handleSubmit, errors } = useLogInFormData()
    const navigate = useNavigate()

    const token = getToken()
    if (token) navigate("/dashboard")


    function onClick(data) {

        const signupFn = async () => {
            try {
                const res = await api.post("auth/login", data)
                // dispatch({ type: "addContact", payload: [...contactData.data, res] })
                console.log(res)
                console.log(res.data)
                const token = res.data.token
                setToken(token)
                navigate("/dashboard")
            } catch (error) {
                console.log("error")
            }
        }
        signupFn()

    }


    return (
        <form className={styles.container} onSubmit={handleSubmit(onClick)}>

            <h1>بوت کمپ بوتواستارت</h1>

            <div className={styles.form}>

                <div className={styles.logo}>
                    <img src="/Union.webp" alt="logo" />
                    <p>فرم ورود</p>
                </div>

                <div className={styles.inputs}>
                    {
                        logInFormData.map(d =>
                            <InputForm key={d.name} {...d} register={register} errors={errors} />)
                    }
                </div>

                <div className={styles.clicks}>
                    <button >ورود</button>
                    <span onClick={() => { navigate("/signup") }}>ایجاد حساب کاربری!</span>
                </div>
            </div>
        </form>
    )
}

export default Login