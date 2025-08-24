const signUpFormData = [
  { placeholder: "نام کاربری ", name: "username" },
  { placeholder: "رمز عبور", name: "password" },
  { placeholder: "تکرار رمز عبور", name: "repeatPassword" },
];

const logInFormData = [
  { placeholder: "نام کاربری ", name: "username" },
  { placeholder: "رمز عبور", name: "password" },
];

const createProductData = [
  { placeholder: "نام کالا", label: "نام کالا", name: "name" },
  { placeholder: "تعداد", label: "تعداد موجودی", name: "quantity" },
  { placeholder: "قیمت", label: "قیمت", name: "price" },
];

export { signUpFormData, logInFormData, createProductData };
