import React, { Component } from "react";
import Axios from "axios";

//const QNA_API_BASE_URL = "http://localhost:8080/qna";
const QNA_API_BASE_URL = "http://192.168.0.28:8080/qna";

class ReviewService extends Component {
  //QNA 자세히보기
  qnaDetail(qnaId) {
    console.log("qnaDetail");
    return Axios.post(QNA_API_BASE_URL + "_detail/" + qnaId);
  }

  //qna 게시판
  fetchQnA() {
    console.log("fetchQnA");
    return Axios.get(QNA_API_BASE_URL);
  }

  //QNA 등록
  insertQnA() {
    console.log("insertQnA");
    return Axios.post(QNA_API_BASE_URL);
  }

  //QNA 수정
  updateQnA() {
    console.log("updateQnA");
    return Axios.put(QNA_API_BASE_URL);
  }

  //QNA 삭제
  deleteQnA(qnaId) {
    console.log("deleteQnA");
    return Axios.delete(QNA_API_BASE_URL + "/" + qnaId);
  }
}

export default ReviewService;
