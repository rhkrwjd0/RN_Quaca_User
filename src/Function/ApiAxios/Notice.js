import axios from 'axios';
import {Alert} from 'react-native';


// 앱 공지 받아오기(첫화면 팝업)
export const getNotice = (commonUrl, storeId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/notice`;
    const param = {
      StoreId: storeId,
    };
    axios
      .post(url, param)
      .then((resNotice) => {
        if (resNotice.data.success) {
          resolve(resNotice.data.info);
        } else {
          reject(resNotice.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '공지를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};
// 자주하는질문 받아오기
export const getFAQ = (commonUrl, storeId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/FAQ`;
    const param = {
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resFAQ) => {
        if (resFAQ.data.success) {
          resolve(resFAQ.data.info);
        } else {
          reject(resFAQ.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '자주하는질문을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};
// 1:1 문의 목록
export const getAskList = (commonUrl, storeId, ssoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/AskList`;
    const param = {
      StoreId: storeId,
      SsoKey : ssoKey,
    };
    axios
      .post(url, param)
      .then((resAskList) => {
        if (resAskList.data.success) {
          resolve(resAskList.data.info);
        } else {
          reject(resAskList.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '자주하는질문을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 1:1 문의 등록
export const insertAsk = (commonUrl, storeId, ssoKey, insertNm, title, contents) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/AskInsert`;
    const param = {
      StoreId : storeId,
      SsoKey : ssoKey, 
      InsertNm : insertNm,
      Title : title,
      Contents : contents,
    };
    axios
      .post(url, param)
      .then((resAskInsert) => {
        if (resAskInsert.data.success) {
          resolve(resAskInsert.data);
        } else {
          reject(resAskInsert.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '자주하는질문을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};


// 고객센터 받아오기
export const getNoticeList = (commonUrl, StoreId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/NoticeList`;
    const param = {
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resNoticeList) => {
        if (resNoticeList.data.success) {
          resolve(resNoticeList.data.info);
        } else {
          reject(resNoticeList.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '자주하는질문을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 고객센터 받아오기(정보)
export const getNoticeInfo = (commonUrl, StoreId, Sid) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}notice/NoticeInfo`;
    const param = {
      StoreId: '1',
      Sid : Sid
    };
    axios
      .post(url, param)
      .then((resNoticeInfo) => {
        if (resNoticeInfo.data.success) {
          resolve(resNoticeInfo.data.info);
        } else {
          reject(resNoticeInfo.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '자주하는질문을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};