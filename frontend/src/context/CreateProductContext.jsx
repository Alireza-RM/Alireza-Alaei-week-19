import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext } from "react";

const schema = Yup.object().shape({
    name: Yup.string().required("نام الزامی است"),
    quantity: Yup.string().required("موجودی محصول الزامی است"),
    price: Yup.string().required("تعداد محصول الزامی است")
});


const createProductProviderCTX = createContext()


function CreateProductContext({ children }) {



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <createProductProviderCTX.Provider value={{ register, handleSubmit, reset, errors }}>
            {children}
        </createProductProviderCTX.Provider>
    )
}


const useCreateProductFormData = () => {

    const data = useContext(createProductProviderCTX)
    return { ...data }
}

export { useCreateProductFormData }

export default CreateProductContext
