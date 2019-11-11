import axios from "axios";
import { server } from "../constants.js";

//ACCOUNT actions

export function checkAccount(accountNumber) {
  return dispatch => {
    let obj = {};
    obj.accountNumber = accountNumber;
    let accountJSON = JSON.stringify(obj);

    return axios
      .post(`${server}/api/user/AccountAuth`, accountJSON, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        if (res.data.StatusCode === "00") {
          alert(res.data.Data.Message);
          dispatch(accountVerifiedSuccess(accountNumber));
        } else {
          alert(res.data.Message);
          dispatch(accountVerifiedFailed());
        }
      });
  };
}

export function accountVerifiedSuccess(accountNumber) {
  return {
    type: "ACC_VERIFIED_SUCCESS",
    accountNumber: accountNumber
  };
}

export function accountVerifiedFailed() {
  return {
    type: "ACC_VERIFIED_FAILED"
  };
}

// PIN verification - MessageConfirmation

export function verifyPIN(accountNo, PIN) {
  return dispatch => {
    let obj = {};
    obj.accountNo = accountNo;
    obj.messageCode = PIN;

    console.log(obj);
    let message = JSON.stringify(obj);

    console.log(message);

    return axios
      .post(`${server}/api/user/MessageConfirmation`, message, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        if (res.data.StatusCode === "00") {
          console.log(res);
          // alert(res.data.Data.Message);
          dispatch(pinVerifiedSuccess());
        } else {
          console.log(res);
          // alert(res.data.Message);
          dispatch(pinVerifiedFailed());
        }
      });
  };
}

export function pinVerifiedSuccess() {
  return {
    type: "PIN_VERIFIED_SUCCESS"
  };
}

export function pinVerifiedFailed() {
  return {
    type: "PIN_VERIFIED_FAILED"
  };
}

// Create Account

export function createAccount(userAccount) {
  return dispatch => {
    let account = JSON.stringify(userAccount);

    console.log(account);

    return axios
      .post(`${server}/api/Account/Register`, account, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        if (res.statusText === "OK") {
          dispatch(createAccountSuccess());
        } else {
          alert("Something went wrong");
        }
      });
  };
}

export function createAccountSuccess() {
  return {
    type: "CREATE_ACCOUNT_SUCCESS"
  };
}

// Login

export function login(account) {
  return dispatch => {
    dispatch(loginRequest());

    let accountJSON = JSON.stringify(account);

    return axios
      .post(`${server}/api/account/login`, accountJSON, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);

        if (res.data.StatusCode === "00") {
          dispatch(loginSuccess(res.data.Data));
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(e => {
        dispatch(loginFailure());
        console.log(e);
      });
  };
}

export function loginRequest() {
  return {
    type: "LOGIN_REQUEST"
  };
}

export function loginSuccess(userInfo) {
  return {
    type: "LOGIN_SUCCESS",
    userInfo: userInfo
  };
}

export function loginFailure() {
  return {
    type: "LOGIN_FAILED"
  };
}

//Logout

export function logout() {
  return {
    type: "LOGOUT"
  };
}

//Payment Actions

export function savePayment(payment) {
  return dispatch => {
    let paymentJSON = JSON.stringify(payment);

    return axios
      .post(`${server}/api/user/SavePayment`, paymentJSON, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        if (res.data.StatusCode === "00") {
          dispatch(savePaymentSuccess());
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function savePaymentSuccess() {
  return {
    type: "PAYMENT_SUCCESS"
  };
}

// Orders Actions

export function getUserOrders(userId) {
  return dispatch => {
    let tokenStr =
      "rSl0DNUHW7q6scwXeTJ9-HWNzTB0cipYVfXqtu7Fkv5VMMHSpiUXJsJZWPdwNAQdhzUHJN4pSi0mBNFfnffbkBfwwGWxo1j5HKZTFCuCXNxcav3qaLjeQVLL_DSaP1nsnZDJ-HvT_WmCHzAfO9ays7kX3KIdeh_AhkZhWFvzdaW-6fove0u8XJyW2junw2LQuK9Qo1pOP7gRMf8gBlEQEbPZbwIRHyweXVpE_BhBISulcrVtFLRbJV19WxzdPDMKvXyEEOxxHkwZacH97qk6L1qN8dY1GcTZKkm5su_7-yB44A88lSeIbHWaOcoMqQ_iN4nMZdPOqMLF7x-SKEphBqRXqwOi4BvUWKFPoGyB0kql5BCI-Dsph7-X7iE5lfhsbWy8L6C9erX-Z5mYrkaiVYF9p47siJceLovDoz08hT8yWPuW-43LuZrF0VCgSrkqZwpWvqNUU-by_IMxtvHEVG67QgkU04-7rDXpOSIy_Tfmdl49i2CwHjtYmo5Nx3ZYhEfEQ4JOcp96aHzs4cpjNg";

    return axios
      .get(`${server}/api/order/GetOrderByUserID/?id=${userId}`, {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        if (res.statusText === "OK") {
          dispatch(getUserOrdersSuccess(res.data));
        } else {
          alert("something went wrong");
        }
      });
  };
}

export function getUserOrdersSuccess(userOrders) {
  return {
    type: "GET_USER_ORDERS",
    userOrders: userOrders
  };
}

export function createOrder(cart) {
  return dispatch => {
    let tokenStr =
      "rSl0DNUHW7q6scwXeTJ9-HWNzTB0cipYVfXqtu7Fkv5VMMHSpiUXJsJZWPdwNAQdhzUHJN4pSi0mBNFfnffbkBfwwGWxo1j5HKZTFCuCXNxcav3qaLjeQVLL_DSaP1nsnZDJ-HvT_WmCHzAfO9ays7kX3KIdeh_AhkZhWFvzdaW-6fove0u8XJyW2junw2LQuK9Qo1pOP7gRMf8gBlEQEbPZbwIRHyweXVpE_BhBISulcrVtFLRbJV19WxzdPDMKvXyEEOxxHkwZacH97qk6L1qN8dY1GcTZKkm5su_7-yB44A88lSeIbHWaOcoMqQ_iN4nMZdPOqMLF7x-SKEphBqRXqwOi4BvUWKFPoGyB0kql5BCI-Dsph7-X7iE5lfhsbWy8L6C9erX-Z5mYrkaiVYF9p47siJceLovDoz08hT8yWPuW-43LuZrF0VCgSrkqZwpWvqNUU-by_IMxtvHEVG67QgkU04-7rDXpOSIy_Tfmdl49i2CwHjtYmo5Nx3ZYhEfEQ4JOcp96aHzs4cpjNg";

    return axios
      .post(`${server}/api/order/CreateOrder/`, cart, {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        if (res.statusText === "OK") {
          dispatch(createOrderSuccess());
        } else {
          alert("something went wrong");
        }
      });
  };
}

export function createOrderSuccess() {
  return {
    type: "CREATE_ORDER"
  };
}

// Category Actions

export function getCategories() {
  return dispatch => {
    return axios
      .get(`${server}/api/category/GetAllCategories`)
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        dispatch(getCategoriesSuccess(res.data.Data));
      });
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: "GET_CATEGORIES",
    categories: categories
  };
}

//Products Actions

export function getAllProducts() {
  return dispatch => {
    dispatch(fetchingProducts());

    return axios.get(`${server}/api/Product/GetAllProducts`).then(response => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res.data.Data);
      dispatch(getAllProductsSuccess(res.data.Data));
    });
  };
}

export function fetchingProducts() {
  return {
    type: "FETCHING_PRODUCTS"
  };
}

export function getAllProductsSuccess(products) {
  return {
    type: "GET_ALL_PRODUCTS",
    products: products
  };
}

export function getSingleProduct(name) {
  return dispatch => {
    return axios
      .get(`${server}/api/Product/GetSingleProduct/?name=${name}`)
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);
        dispatch(getSingleProductSuccess(res.data.Data));
      });
  };
}

export function getSingleProductSuccess(product) {
  return {
    type: "GET_SINGLE_PRODUCT",
    product: product
  };
}

export function getProductByCategories(id, name) {
  return dispatch => {
    return axios
      .get(
        `${server}/api/Product/GetProductsByCategory/?id=${id}&name=${ name && name.toLowerCase()}`
      )
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        dispatch(getProductByCategorySuccess(res.data.Data));
      });
  };
}

export function getProductByCategorySuccess(products) {
  return {
    type: "GET_PRODUCTS_BY_CATEGORY",
    products: products
  };
}

export function setCategoryId(id) {
  return {
    type: "SET_CATEGORY_ID",
    id: id
  };
}

export function getSubCategoriesByParent(id, name) {
  return dispatch => {
    return axios
      .get(
        `${server}/api/category/GetSubCategoriesByParent/?id=${id}&name=${name}`
      )
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        dispatch(getSubCategoriesByParentSuccess(res.data.Data));
      });
  };
}

export function getSubCategoriesByParentSuccess(subcategories) {
  return {
    type: "GET_SUB_CATEGORIES",
    subcategories: subcategories
  };
}

export function getProductsBySubCategory(id, name) {
  return dispatch => {
    return axios
      .get(
        `${server}/api/Product/GetProductsBySubCategory/?id=${id}&name=${name}`
      )
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res);
        dispatch(getProductsBySubCategorySuccess(res.data.Data));
      });
  };
}

export function getProductsBySubCategorySuccess(products) {
  return {
    type: "GET_SUB_CATEGORY_PRODUCTS",
    products: products
  };
}

// Profile Actions

export function updateProfile(profile) {
  return dispatch => {
    let profileJSON = JSON.stringify(profile);

    console.log(profileJSON);

    return axios
      .post(`${server}/api/user/UpdateProfile`, profileJSON, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json"
        }
      })
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);

        if (res.data.StatusCode === "00") {
          dispatch(updateProfileSuccess(res.data.Data));
        } else {
          alert("something went wrong");
        }
      });
  };
}

export function updateProfileSuccess(userInfo) {
  return {
    type: "UPDATE_PROFILE",
    userInfo: userInfo
  };
}

// Points Actions
export function getPointsHistory(userId) {
  return dispatch => {
    // console.log(`${server}/api/User/GetPointsHistory?userId=${userId}`);

    return axios
      .get(`${server}/api/User/GetPointsHistory?Id=${userId}`)
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);
        dispatch(getPointsHistorySuccess(res.data.Data));
      });
  };
}

export function getPointsHistorySuccess(history) {
  return {
    type: "GET_POINTS_HISTORY",
    history: history
  };
}

//Cart Actions

export function updateCart(cart) {
  return {
    type: "UPDATE_CART",
    cart: cart
  };
}

// Password Recovery Actions

export function forgotPassword(account) {
  return dispatch => {
    return axios
      .post(`${server}/api/account/ForgotPassword`, account)
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);
        dispatch(forgotPasswordSuccess());
      });
  };
}

export function forgotPasswordSuccess() {
  return {
    type: "FORGOT_SUCCESS"
  };
}

export function resetPassword(account) {
  return dispatch => {
    return axios
      .post(`${server}/api/account/ResetPassword`, account)
      .then(response => {
        let res = JSON.parse(JSON.stringify(response));
        console.log(res.data.Data);
        dispatch(resetPasswordSuccess());
      });
  };
}

export function resetPasswordSuccess() {
  return {
    type: "RESET_SUCCESS"
  };
}
