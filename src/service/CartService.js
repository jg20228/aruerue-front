import Axios from "axios";

const CART_API_BASE_URL = "http://localhost:8080/shop_cart";
//const CART_API_BASE_URL = "http://192.168.0.28:8080/shop_cart";

class CartService {
  //해당 유저의 쇼핑카트 보기
  cart(userId) {
    console.log("insertCart");
    return Axios.post(CART_API_BASE_URL + "/" + userId);
  }

  //장바구니에 저장
  insertCart(userId) {
    console.log("insertCart");
    return Axios.post(CART_API_BASE_URL + "/insert/" + userId);
  }

  //장바구니 수정
  updateCart() {
    console.log("updateCart");
    return Axios.put(CART_API_BASE_URL);
  }

  //장바구니 삭제
  deleteCart(cartId) {
    console.log("deleteCart");
    return Axios.delete(CART_API_BASE_URL + "/" + cartId);
  }
}

export default CartService;
