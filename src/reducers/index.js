import { stat } from "fs";

let defaultState = {
    accountNumber : "",
    isAccountExist:false,
    currentUserAccountNumber:"",
    isPINVerified:false,
    accountCreated:false,
    userExist:false,
    loggedInUserAccount:[],
    loginStatus:false,
    userOrders:[],
    categories:[],
    subcategories:[],
    selectedNavCategory:null,
    isProductsFetching:false,
    products:[],
    productsObject:{},
    allProducts:[],
    singleProduct:{
        product:{}
    },
    loginRequestStatus:true,
    pointsHistory:[],
    cart:{
        Order:{},
        OrderItems:[]
    }
}



const mainReducer = (state = defaultState,action) => {

    switch (action.type) {
        case "ACC_VERIFIED_SUCCESS":
        return{
            ...state,
            isAccountExist : true,
            currentUserAccountNumber: action.accountNumber
        }

        case "ACC_VERIFIED_FAILED":
        return{
            ...state,
            isAccountExist : false
        }

        case "PIN_VERIFIED_SUCCESS":
        return{
            ...state,
            isPINVerified:true
        }

        case "PIN_VERIFIED_FAILED":
        return{
            ...state,
            isPINVerified:false
        }

        case "CREATE_ACCOUNT_SUCCESS":
        return{
            ...state,
            accountCreated: true
        }
        
        case "LOGIN_REQUEST":
        return{
            ...state,
            loginRequestStatus:false
        }

        case "LOGIN_SUCCESS":

        return{
            ...state,
            userExist:true,
            loggedInUserAccount:action.userInfo,
            loginRequestStatus:true,
            loginStatus:true
        }


        case "LOGIN_FAILED":
        return{
            ...state,
            loginRequestStatus:true,
            loginStatus:false,
            userExist:false
        }

        case "LOGOUT":
        return{
            ...state,
            loginStatus:false,
            userExist:false,
            loggedInUserAccount:[]
        }

        case "GET_USER_ORDERS":
        return{
            ...state,
            userOrders:action.userOrders
        }

        case "GET_CATEGORIES":
        return{
            ...state,
            categories:action.categories
        }

        case "SET_CATEGORY_ID":
        return{
            ...state,
            selectedNavCategory:action.id
        }


        case "FETCHING_PRODUCTS":
        return{
            ...state,
            isProductsFetching:true
        }

        case "GET_ALL_PRODUCTS":
        return{
            ...state,
            allProducts:action.products,
            isProductsFetching:false
        }

        case "GET_SINGLE_PRODUCT":
        let receivedProduct = {...state.singleProduct};
        receivedProduct.product = action.product;
        return{
            ...state,
            singleProduct:receivedProduct
        }

        // action.products.forEach(product => {
        //     if (!(product.Category1.name in state.productsObject)) {
        //         state.productsObject[product.Category1.name] = product;
        //     }
        // });
        case "GET_PRODUCTS_BY_CATEGORY":
        return{
            ...state,
            products:action.products,
            isCategoryProductFetching:false
        }


        case "GET_SUB_CATEGORY_PRODUCTS":
        return{
            ...state,
            products:action.products,
            isSubcategoryProductFetching:false
        }


        case "GET_SUB_CATEGORIES":
        return{
            ...state,
            subcategories:action.subcategories
        }

        case "UPDATE_PROFILE":
        return{
            ...state,
            loggedInUserAccount:action.userInfo
        }

        case "GET_POINTS_HISTORY":
        return{
            ...state,
            pointsHistory:action.history
        }

        case "UPDATE_CART":
        return {
            ...state,
            cart:action.cart
        }

        case "CREATE_ORDER":
        return{
            ...state,
            cart:{
                Order:{},
                OrderItems:[]
            }
        }

        case "PAYMENT_SUCCESS":
        return{
            ...state
        }

        default:
            return{
                ...state
            }
    }
}


export default mainReducer;