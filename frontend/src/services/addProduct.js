import toastComponent from "../utils/toastComponent";
import { api } from "./api";

async function addProduct(
  data,
  productData,
  dispatch,
  closeAllModal,
  deleteId
) {
  const dataForm = { ...data, id: deleteId };
  const newProduct = productData.data.filter((c) => c.id === dataForm.id);

  if (!!newProduct.length) {
    putApi();
  } else {
    postApi();
  }

  async function postApi() {
    try {
      const res = await api.post("products", { ...dataForm });
      dispatch({
        type: "addContact",
        payload: [...productData.data, res.data],
      });
      toastComponent("success", "green", "محصول به لیست محصول ها اضافه شد");
    } catch (error) {
      console.log("error");
      toastComponent("error", "red", "  محصول اضافه نشد |  مشکلی وجود دارد");
    }
  }

  async function putApi() {     
    try {
      const res = await api.put(`products/${dataForm.id}`, { ...dataForm });
      const indexFilter = productData.data.findIndex(
        (c) => c.id === res.data.id
      );
      productData.data[indexFilter] = res.data;
      dispatch({ type: "addContact", payload: [...productData.data] });
      toastComponent("success", "blue", "محصول ویرایش شد !!");
    } catch (error) {
      console.log("error");
      toastComponent("error", "red", "  محصول ویرایش نشد |  مشکلی وجود دارد");
    }
  }

  closeAllModal();
}

export { addProduct };
