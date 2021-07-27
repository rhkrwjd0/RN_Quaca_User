import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

export const kakaoLogin = () => {
  return new Promise((resolve, reject) => {
    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          reject(`Login Cancelled:${err.message}`);
        } else {
          reject(`Login Failed:${err.message}`);
        }
      });
  });
};

export const kakaoLogout = () => {
  return new Promise((resolve, reject) => {
    KakaoLogins.logout()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(`Logout Failed:${err.message}`);
      });
  });
};

export const getProfile = () => {
  return new Promise((resolve, reject) => {
    KakaoLogins.getProfile()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// ===== 여기서부터 사용안함 (혹시몰라서 그냥 붙여놈..) =====
const logCallback = (log, callback) => {
  console.log(log);
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

export const unlinkKakao = () => {
  logCallback('Unlink Start', setUnlinkLoading(true));

  KakaoLogins.unlink()
    .then((result) => {
      setToken(TOKEN_EMPTY);
      setProfile(PROFILE_EMPTY);
      logCallback(`Unlink Finished:${result}`, setUnlinkLoading(false));
    })
    .catch((err) => {
      logCallback(
        `Unlink Failed:${err.code} ${err.message}`,
        setUnlinkLoading(false),
      );
    });
};
