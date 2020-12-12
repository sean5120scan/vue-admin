import CryptoJS from "crypto-js"
import { Message } from 'element-ui'

const debounce = (func, wait) => {
  let timer;
  return function () {
    let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
function checkPhone(val) {
  return (/^1[3456789]\d{9}$/).test(val)
}
function checkEmail(val) {
  return (/^[_a-z0-9-\.]+@([-a-z0-9]+\.)+[a-z]{2,}$/i).test(val)
}


const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量
//解密方法
function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
  // let srcs = CryptoJS.enc.Utf8.parse(word);
  // let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  let encrypted = CryptoJS.SHA256(word).toString();
  console.log("decryptedStr:", encrypted)
  // return encrypted.ciphertext.toString().toUpperCase();
  return encrypted;
}
const getUrlParam = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//cooike处理
const Cookie = {
  set(name, value, exdays) {
    var exdata = new Date()
    exdata.setTime(exdata.getTime() + 24 * 60 * 60 * 1000 * exdays)
    if (name == "password") {
      document.cookie = name + '=' + Encrypt(value) + ';expires=' + exdata.toGMTString();
    } else {
      document.cookie = name + '=' + escape(value) + ';expires=' + exdata.toGMTString();
    }
  },
  get(name) {
    if (document.cookie.length > 0) {
      let passVal = ""
      let arr = document.cookie.split(";")
      for (var i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split("=")
        arr2[0] = arr2[0].replace(/\s/g, "")
        if (arr2[0] == name) {
          if (name == 'password') {
            return Decrypt(arr2[1])
          } else {
            return unescape(arr2[1])
          }
        }
      }
    } else { 
      return ""
    }
  },
  clear() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
      for(var i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}

const getComponent = (fileDirName, componentName) => {
  if (!componentName) {
    return () => import(`@v/${fileDirName}/index.vue`)
  } else {
    return () => import(`@v/${fileDirName}/${componentName}.vue`)
  }
}
const db = {
  ls: {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
      localStorage.removeItem(key);
    },
    clear() {
      localStorage.clear();
    }
  },
  ss: {
    set(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
      return JSON.parse(sessionStorage.getItem(key));
    },
    remove(key) {
      sessionStorage.removeItem(key);
    },
    clear() {
      localStorage.clear();
    }
  }
}
const errMsg = (message) => {
  Message({
    message: message,
    type: 'error',
    offset: 220,
    duration: 1000
  })
}

const resolveParams=(str)=>{
  let arr=str.split("&");
  let res={}
  console.log("arr:",arr)
  for(let i =0;i<arr.length;i++){
    let temp=arr[i].split("=")
    res[temp[0]]=temp[1]
  }
  return res
}

export {
  getComponent,
  db,
  debounce,
  checkPhone,
  checkEmail,
  getUrlParam,
  Cookie,
  errMsg,
  Encrypt,
  Decrypt,
  resolveParams
}