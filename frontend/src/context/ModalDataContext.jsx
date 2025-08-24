import { createContext, useContext, useState } from "react";
import { useCreateProductFormData } from "./CreateProductContext";



const ModalCTX = createContext()


function ModalContext({ children }) {

    const { reset } = useCreateProductFormData()

    const [isDeleteModal, setIsDeleteModal] = useState(false)
    const [isAddProductModal, setIsAddProductModal] = useState(false)
    const [isEditProductModal, setIsEditProductModal] = useState(false)

    const [deleteId, setDeleteId] = useState(null)

    function closeAllModal() {
        setIsDeleteModal(false)
        setIsAddProductModal(false)
        setIsEditProductModal(false)
        setDeleteId(null)
        reset({ name: "", quantity: "", price: "" })
    }

    return (
        <ModalCTX.Provider value={{
            isDeleteModal, isAddProductModal, isEditProductModal, deleteId
            , setIsDeleteModal, setIsAddProductModal, setIsEditProductModal, setDeleteId,
            closeAllModal
        }}>
            {children}
        </ModalCTX.Provider>
    )
}


const useModalData = () => {

    const data = useContext(ModalCTX)
    return { ...data }
}

export { useModalData }

export default ModalContext
