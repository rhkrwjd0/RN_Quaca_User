import {setAsyncStorage, getAsyncStorage, removeAsyncStorage} from '../AsyncStorage';

// 장바구니 없으면 새로생성
export const startCart = () => {
  return new Promise((resolve, reject) => {
    // 장바구니 있는지 확인
    getAsyncStorage('cart').then((resGet) => {
      if (resGet.success && resGet.value === null) {
        // 없으면 생성
        setAsyncStorage('cart', JSON.stringify([])).then((resSet) => {
          if (resSet) {
            console.log('cart AsyncStorage 새로생성 완료');
          } else {
            console.log('cart AsyncStorage 새로생성 실패 : ', resSet);
          }
          resolve(true);
        });
      } else {
        resolve(resGet.value);
      }
    });
  });
};

// 장바구니 데이터 가져오기
export const getCart = () => {
  return new Promise((resolve, reject) => {
    getAsyncStorage('cart').then((resGet) => {
      if (resGet.success) {
        resolve(resGet.value);
      } else {
        reject(resGet.msg);
      }
    });
  });
};

// 장바구니 메뉴추가
export const setCart = (addCartItem) => {
  return new Promise((resolve, reject) => {
    // 기존 장바구니 정보 가져오기
    getAsyncStorage('cart').then((resGet) => {
      if (resGet.success) {
        var cartData = JSON.parse(resGet.value);
        // 기존 장바구니 정보 + 새로운 메뉴정보 list에 추가
        cartData.push(addCartItem);
        // 추가 완료 된 장바구니 정보로 set
        setAsyncStorage('cart', JSON.stringify(cartData)).then((resSet) => {
          if (resSet) {
            console.log('cart AsyncStorage 저장 완료');
            resolve(true);
          } else {
            console.log('cart AsyncStorage 저장 실패 : ', resSet);
            reject(resSet);
          }
        });
      } else {
        reject(resGet.msg);
      }
    });
  });
};

// 장바구니 전체 수정 (메뉴삭제 후 통으로변경)
export const updateCart = (updateCartItem) => {
  return new Promise((resolve, reject) => {
    setAsyncStorage('cart', JSON.stringify(updateCartItem)).then((resSet) => {
      if (resSet) {
        console.log('cart AsyncStorage 저장 완료');
        resolve(true);
      } else {
        console.log('cart AsyncStorage 저장 실패 : ', resSet);
        reject(resSet);
      }
    });
  });
};

// 결제완료 후 장바구니, 저장되있는 매장 비우기
export const removeCart = () => {
  return new Promise((resolve, reject) => {
    setAsyncStorage('cart', JSON.stringify([])).then((resRemove) => {
      if (resRemove) {
        resolve(resRemove);
      } else {
        reject(resRemove);
      }
    });
    removeAsyncStorage('cartStoreId');
  });
};

// 장바구니 집어넣을때 매장 아이디도 저장해두기
export const updateStoreId = (StoreId) => {
  return new Promise((resolve, reject) => {
    setAsyncStorage('cartStoreId', StoreId).then((resSet) => {
      if (resSet) {
        console.log('cartStoreId AsyncStorage 저장 완료');
        resolve(true);
      } else {
        console.log('cartStoreId AsyncStorage 저장 실패 : ', resSet);
        reject(resSet);
      }
    });
  });
};

// 기존 장바구니에 저장되있는 매장
export const getStoreId = () => {
  return new Promise((resolve, reject) => {
    getAsyncStorage('cartStoreId').then((resGet) => {
      if (resGet.success) {
        resolve(resGet.value);
      } else {
        reject(resGet.msg);
      }
    });
  });
};
