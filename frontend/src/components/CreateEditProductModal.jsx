import React from 'react'
import { createProductData } from '../constants/inputData'
import Modal from './Modal'
import InputForm from './InputForm'
import { addProduct } from '../services/addProduct'

function CreateEditProductModal({ edit = false, closeAllModal, handleSubmit, register, errors, styles,
    productData, dispatch, deleteId }) {


    const onClick = async (data) => {
        await addProduct(data, productData, dispatch, closeAllModal, deleteId)
    }


    return (
        <>
            {
                <Modal closeAllModal={closeAllModal}>
                    <form className={styles.container} onSubmit={handleSubmit(onClick)}>
                        <div className={styles.img}>
                            <p>
                                {edit ? "ویرایش اطلاعات" : "ایجاد محصول جدید"}
                            </p>
                        </div>
                        <div className={styles.inputs}>
                            {
                                createProductData.map(d =>
                                    <InputForm key={d.name} {...d} register={register} errors={errors} isLabel />)
                            }
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.create}>
                                {edit ? "ثبت اطلاعات جدید" : "ایجاد"}
                            </button>
                            <button className={styles.cancel} onClick={closeAllModal}>لغو</button>
                        </div>
                    </form>
                </Modal>
            }
        </>
    )
}

export default CreateEditProductModal