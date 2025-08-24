import CreateEditProductModal from '../components/CreateEditProductModal'
import Modal from '../components/Modal'
import { useCreateProductFormData } from '../context/CreateProductContext'
import { useModalData } from '../context/ModalDataContext'
import { ProductContextData } from '../context/ProductsDataContext'
import { deleteProduct } from '../services/handelProducts'


import styles from "./AllModal.module.css"

function AllModal() {

    const { productData, dispatch } = ProductContextData();


    const { isDeleteModal, isAddProductModal, isEditProductModal, deleteId, closeAllModal } = useModalData()



    const { register, handleSubmit, reset, errors } = useCreateProductFormData()


    return (
        <>

            {
                isAddProductModal &&
                <CreateEditProductModal closeAllModal={closeAllModal}
                    handleSubmit={handleSubmit} register={register} errors={errors} styles={styles}
                    isEditProductModal={isEditProductModal} deleteId={deleteId}
                    productData={productData} dispatch={dispatch} reset={reset}
                />
            }

            {
                isEditProductModal &&
                <CreateEditProductModal closeAllModal={closeAllModal}
                    edit
                    handleSubmit={handleSubmit} register={register} errors={errors} styles={styles}
                    isEditProductModal={isEditProductModal} deleteId={deleteId}
                    productData={productData} dispatch={dispatch} reset={reset}
                />
            }




            {
                isDeleteModal &&
                <Modal closeAllModal={closeAllModal}>
                    <div className={styles.container}>
                        <div className={styles.img}>
                            <img src="/Close.webp" alt="logoDelete" />
                        </div>
                        <p>آیا از حذف این محصول مطمئنید؟</p>
                        <div className={styles.buttons}>
                            <button className={styles.delete} onClick={() => {
                                console.log(deleteId)
                                deleteProduct(deleteId, productData, dispatch, closeAllModal)
                            }}>حذف</button>
                            <button className={styles.cancel} onClick={closeAllModal}>لغو</button>
                        </div>
                    </div>
                </Modal>
            }

        </>
    )
}

export default AllModal