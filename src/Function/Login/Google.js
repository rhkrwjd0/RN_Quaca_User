import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

GoogleSignin.configure({
  // 사용자 firebase -> Authentication -> Sign-in method -> Google클릭 -> 웹 SDK구성 -> 웹 클라이언트 ID
  webClientId:
    '1018448009882-o4qmal8o26sq5j96ru49oae8543100d8.apps.googleusercontent.com', 
  offlineAccess: true,
});

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return 'SIGN_IN_CANCELLED';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      return 'IN_PROGRESS';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      return 'PLAY_SERVICES_NOT_AVAILABLE';
    } else {
      return error;
    }
  }
};

export const googleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    return true;
  } catch (error) {
    return error;
  }
};
