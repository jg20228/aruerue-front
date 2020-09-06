import axios from "axios";

const MYPAGE_API_BASE_URL = "http://localhost:8080/shop_mypage";
//const MYPAGE_API_BASE_URL = "http://192.168.0.28:8080/shop_mypage";

class MyPageService {
  mypageOrder(userId) {
    console.log("myPageOrder");
    return axios.post(MYPAGE_API_BASE_URL + "/order/" + userId);
  }

  mypageCancle(userId) {
    console.log("mypageCancle");
    return axios.post(MYPAGE_API_BASE_URL + "/cancle/" + userId);
  }

  mypageCoupon(userId) {
    console.log("mypageCoupon");
    return axios.post(MYPAGE_API_BASE_URL + "/coupon/" + userId);
  }

  mypagePoint(userId) {
    console.log("mypagePoint");
    return axios.post(MYPAGE_API_BASE_URL + "/point/" + userId);
  }

  mypageQnA(userId) {
    console.log("mypageQnA");
    return axios.post(MYPAGE_API_BASE_URL + "/qna/" + userId);
  }

  mypageUpdate(userId) {
    console.log("mypageUpdate");
    return axios.post(MYPAGE_API_BASE_URL + "/update/" + userId);
  }

  mypageWithdrawal(userId) {
    console.log("mypageWithdrawal");
    return axios.post(MYPAGE_API_BASE_URL + "/withdrawal/" + userId);
  }
}

export default new MyPageService();
