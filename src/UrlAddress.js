import axios from 'axios';
import {Alert} from 'react-native';

// url 못받아오면 이거로 대체 (tera-energy.iptime.org 안되는거임 나중에 바꾸세욤)
const UrlAddress = {
  express_docker: 'http://tera-energy.iptime.org:10010/',
  notice_docker: 'http://tera-energy.iptime.org:10060/',
};

const nowUrl = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://tera-energy.github.io/Tera_Quaca_Common/server.json';
    axios
      .get(url)
      .then((resUrl) => {
        console.log('resUrl > ', resUrl.data);
        const urlJson = {
          express: resUrl.data.customer.serverUrl,
          notice: resUrl.data.storeNotice.serverUrl,
        };
        resolve(urlJson);
      })
      .catch((err) => {
        console.log('getCommonUrl error >', err);
        Alert.alert('SERVER ERROR', '서버정보를 불러 올 수 없습니다.');
        const urlJson = {
          express: UrlAddress.express_docker,
          notice: UrlAddress.notice_docker,
        };
        resolve(urlJson);
      });
  });
};


export {nowUrl};
