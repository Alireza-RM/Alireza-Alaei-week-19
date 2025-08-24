
import { useNavigate } from "react-router-dom"
import InputForm from "../components/InputForm"
import { signUpFormData } from "../constants/inputData"
import { useSignUpFormData } from "../context/SignUpContext"
import { api } from "../services/api"
import toastComponent from "../utils/toastComponent"
import styles from "./Signup.module.css"
import { getToken } from "../utils/tokenHandler"

function Signup() {
    const { register, handleSubmit, errors } = useSignUpFormData()
    const navigate = useNavigate()

    const token = getToken()
    if (token) navigate("/dashboard")

    function onClick(data) {

        if (data.password !== data.repeatPassword) {
            toastComponent("error", "red", "رمز عبور و تکرار آن با هم برابر نیست !")
            return
        }

        console.log(data)
        const { repeatPassword, ...rest } = data
        console.log(repeatPassword)
        console.log(rest)
        console.log("first")

        const signupFn = async () => {
            try {
                const res = await api.post("auth/register", rest)
                // dispatch({ type: "addContact", payload: [...contactData.data, res] })
                console.log(res)
                navigate("/login")
            } catch (error) {
                console.log("error")
                toastComponent("error", "red", "کاربری با این مشخصات وجود دارد !")
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
                    <p>فرم ثبت نام</p>
                </div>

                <div className={styles.inputs}>
                    {
                        signUpFormData.map(d =>
                            <InputForm key={d.name} {...d} register={register} errors={errors} />)
                    }
                </div>

                <div className={styles.clicks}>
                    <button >ثبت نام</button>
                    <span onClick={() => { navigate("/login") }}>حساب کاربری دارید؟</span>
                </div>
            </div>
        </form>
    )
}

export default Signup