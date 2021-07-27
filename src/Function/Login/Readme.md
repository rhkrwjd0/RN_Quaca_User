# 로그인

### 네이버 로그인
> 네이버 개발자 센터 - NAVER Developers: https://developers.naver.com/main/

https://www.npmjs.com/package/@react-native-seoul/naver-login

- release apk뽑기전에 node_module 수정하기!!! 안하면 에러  
   node_module/@react-native-seoul/naver-login/android/build.gradle sdk버전 올리기 (프로젝트/android/build.gradle 에있는 버전에 맞추기)
    <pre>
    현재버전
    def DEFAULT_COMPILE_SDK_VERSION = 29  
    def DEFAULT_BUILD_TOOLS_VERSION = "29.0.2"  
    def DEFAULT_MIN_SDK_VERSION = 21  
    def DEFAULT_TARGET_SDK_VERSION = 29  

<hr />

### 카카오 로그인
> Kakao Developers - 카카오: https://developers.kakao.com/

https://www.npmjs.com/package/@react-native-seoul/kakao-login  

- 추가설정  
https://m.blog.naver.com/PostView.nhn?blogId=hobin1019&logNo=221691709479&proxyReferer=https:%2F%2Fwww.google.com%2F

- debug KeyHash : android/app/src/main/java/com/tera/quaca_test2/MainApplication.java 에서 onCreate()의 getHashKey() 주석 참고 (https://coding-dahee.tistory.com/159)
- release KeyHash  
크롬 TermLinux 설치 후 (이거 복붙 안되는데.. 다른 더 좋은방법 있으면 그거로 사용해요..)  
  <pre>echo <SHA-1 인증서지문 입력> | xxd -r -p | openssl base64  
  release: keytool -list -keystore C:\Users\user\Documents\KeyStore\tera.jks 에서 quaca_test2 SHA1입력
  배포: 구글플레이스토어콘솔 SHA1키

참고 : https://mangoday.tistory.com/123


<hr />

### 구글 로그인
> Firebase - Google: https://console.firebase.google.com/u/1/

https://github.com/react-native-google-signin/google-signin  
참고 : https://dev.to/anwargul0x/get-started-with-react-native-google-sign-in-18i5

- SHA1 (경로 프로젝트/android/app 으로 해야함)  
  debug : keytool -list -v -alias androiddebugkey -keystore C:\Users\user\Documents\GitHub\Tera_RN_User_Quaca\android\app\debug.keystore  
  release : keytool -list -keystore C:\Users\user\Documents\KeyStore\tera.jks 에서 quaca_test2 SHA1입력  
  배포 : 구글플레이스토어콘솔 SHA1키  
