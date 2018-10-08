import axios from "axios";

var h2req = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 6000,//请求超时
    headers: {'X-Custom-Header': 'foobar'}
  });