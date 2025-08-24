import toastComponent from "../utils/toastComponent";
import { api } from "./api";





async function deleteProduct(deletesId, productData, dispatch, closeAllModal) {
  if (!deletesId.length) {
    return;
  }

  try {
    const res = await api.delete(`products/${deletesId}`);
    const newProduct = productData.data.filter(
      (c) => !deletesId.includes(c.id)
    );
    dispatch({ type: "deleteContact", payload: newProduct });
    toastComponent("success", "orange", `یک محصول حذف شد   `);
  } catch (error) {
    console.log("error");
    toastComponent("error", "red", "  محصول حذف نشد |  مشکلی وجود دارد");
  } finally {
    closeAllModal();
  }
}

export { deleteProduct };
