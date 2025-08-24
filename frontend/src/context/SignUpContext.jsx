import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext } from "react";

const schema = Yup.object().shape({
    username: Yup.string()
        .required("نام الزامی است")
        .min(3, "نام باید حداقل ۳ حرف باشد"),

    password: Yup.string().required("رمز عبور الزامی است").min(6, "حداقل ۶ کاراکتر لازم است"),
    repeatPassword: Yup.string().required("تکرار رمز عبور الزامی است").min(6, "حداقل ۶ کاراکتر لازم است")
});


const signUpFormProviderCTX = createContext()


function SignUpContext({ children }) {



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <signUpFormProviderCTX.Provider value={{ register, handleSubmit, reset, errors }}>
            {children}
        </signUpFormProviderCTX.Provider>
    )
}


const useSignUpFormData = () => {

    const data = useContext(signUpFormProviderCTX)
    return { ...data }
}

export { useSignUpFormData }

export default SignUpContext
