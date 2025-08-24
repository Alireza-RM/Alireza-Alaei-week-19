import { useEffect, useState } from "react"
import styles from "./Dashboard.module.css"
import { ProductContextData } from "../context/ProductsDataContext"
import { api } from "../services/api"
import ProductDetail from "../components/ProductDetail"
import { BeatLoader } from "react-spinners"
import { useModalData } from "../context/ModalDataContext"
import { getToken } from "../utils/tokenHandler"
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const { productData, dispatch } = ProductContextData()
    const { setIsAddProductModal, closeAllModal } = useModalData()



    const token = getToken()
    if (!token) navigate("/signup")



    useEffect(() => {

        async function getApi() {
            try {
                dispatch({ type: "loading" })
                const { data } = await api.get(`products?name=${search}`)
                dispatch({ type: "success", payload: data.data })
            } catch (error) {
                console.log("errroooor")
                dispatch({ type: "error", payload: "مشکلی در گرفتن دیتا پیش اومده" })
            }
        }
        getApi()

    }, [search])



    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.search}>
                    <img src="/search-normal.webp" alt="searchLogo" />
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو  کالا" />
                </div>
                <div className={styles.logo}>
                    <img src="/images1.webp" alt="" />
                    <div>
                        <p className="">میلاد عظمی</p>
                        <p className="">مدیر</p>
                    </div>
                </div>
            </header>

            <main className={styles.main}>

                <div className={styles.title}>
                    <div>
                        <img src="setting-3.webp" alt="settingLogo" />
                        <span>مدیریت کالا</span>
                    </div>
                    <button onClick={() => setIsAddProductModal(true)}>افزودن محصول</button>
                </div>


                {
                    // true ?
                    productData.loading ?
                        <div className={styles.loading}>
                            <BeatLoader color="#55a3f0" size={20} />
                        </div>
                        :
                        productData.data.length ?

                            <div className={styles.productList}>
                                <div>

                                    <div className={`${styles.product} ${styles.headList}`}>
                                        <div>نام کالا</div>
                                        <div>موجودی</div>
                                        <div>قیمت</div>
                                        <div>شناسه کالا</div>
                                    </div>


                                    {
                                        productData.data.map(i =>
                                            <ProductDetail key={i.id} styles={styles} data={i} />
                                        )
                                    }

                                </div>
                            </div>
                            : productData.error ?
                                <p className={styles.loading}>❌ مشکلی در گرفتن دیتا پیش آمده است ❌</p>
                                :
                                <p className={styles.loading}>❌ هیچ محصولی وجود ندارد ❌</p>


                }
            </main>
        </div>
    )
}

export default Dashboard