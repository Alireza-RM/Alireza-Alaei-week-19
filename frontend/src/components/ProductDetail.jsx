import React from 'react'
import { useModalData } from '../context/ModalDataContext'
import { useCreateProductFormData } from '../context/CreateProductContext'

function ProductDetail({ styles, data }) {

    const { setIsDeleteModal, setIsEditProductModal, setDeleteId } = useModalData()
    const { reset } = useCreateProductFormData()

    const { id, name, price, quantity } = data
    const newId = id.split("-").join("")
    return (
        <div className={styles.product}>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{price} هزار تومان</div>
            <div>{newId}</div>
            <div className={styles.buttons}>
                <button onClick={() => {
                    setIsEditProductModal(true)
                    setDeleteId(id)
                    reset({ name: name, quantity: quantity, price: price })
                }}>
                    <img src="/edit.webp" alt="edit" />
                </button>
                <button onClick={() => {
                    setIsDeleteModal(true)
                    setDeleteId(id)
                }}>
                    <img src="/trash.webp" alt="trash" />
                </button>
            </div>
        </div>
    )
}

export default ProductDetail