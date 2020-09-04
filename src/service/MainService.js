import axios from "axios";

const MAIN_API_BASE_URL = "http://localhost:8080";
//const MAIN_API_BASE_URL = "http://192.168.0.25:8080";

//미리 넣어둔 데이터 경로
const IMG_BASE_URL = "http://localhost:8080";
//const IMG_BASE_URL = "http://192.168.0.25:8080";

class MainService {
  //login
  async login(data) {
    await axios({
      method: "post",
      url: MAIN_API_BASE_URL + "/login",
      data: data,
    }).then((response) => {
      console.log(response);
    });
    return;
  }

  //logout
  logout(data) {
    return axios.post(MAIN_API_BASE_URL + "/logout", data);
  }
  //join
  join(data) {
    return axios.post(MAIN_API_BASE_URL + "/join", data);
  }

  //about 테이블 insert
  aboutPost(data) {
    return axios.post(MAIN_API_BASE_URL + "/about", data);
  }

  //img 경로 리턴
  imgRoot() {
    return IMG_BASE_URL;
  }
  //HOME페이지
  fetchHome() {
    return axios.get(MAIN_API_BASE_URL + "");
  }
  //SHOP페이지
  fetchShop() {
    console.log("SHOP");
    return axios.get(MAIN_API_BASE_URL + "/shop");
  }
  //상품 디테일
  fetchProductByID(productID) {
    console.log("fetchProductByID = ", productID);
    return axios.get(MAIN_API_BASE_URL + "/shop_view/" + productID);
  }
  //리뷰 게시판
  fetchReview() {
    console.log("fetchReview");
    return axios.get(MAIN_API_BASE_URL + "/review");
  }
  //공지사항
  fetchNotice() {
    console.log("fetchNotice");
    return axios.get(MAIN_API_BASE_URL + "/notice");
  }
  //qna 게시판
  fetchQnA() {
    console.log("fetchQnA");
    return axios.get(MAIN_API_BASE_URL + "/qna");
  }
  //장바구니 화면
  fetchCart(userID) {
    console.log("shop_cart");
    return axios.get(MAIN_API_BASE_URL + "/shop_cart/" + userID);
  }
}

export default new MainService();
