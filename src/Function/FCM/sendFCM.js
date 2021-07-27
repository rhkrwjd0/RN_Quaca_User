import axios from 'axios';

// 매장 알림서버에 주문번호로 알림요청하기
export const sendFCM = (CommonUrl, UserPayId) => {
  return new Promise((resolve, reject) => {
    const url = `${CommonUrl.notice}send`;
    console.log('url > ',url)
    const params = {
      UserPayId: UserPayId,
    };
    axios
      .post(url, params)
      .then((resSend) => {
        console.log('resSend > ', resSend.data);
        resolve(true);
      })
      .catch((err) => {
        console.log('err > ', err);
        reject(err);
      });
  });
};
