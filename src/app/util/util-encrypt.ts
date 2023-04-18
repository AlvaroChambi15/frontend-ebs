import * as CryptoJS from "crypto-js"
// import { environment } from "src/environments/environment";

export const encrypt = (data: string): string | null => {
    let token = localStorage.getItem("session");

    if (token) {
        return CryptoJS.AES.encrypt(data, atob(token)).toString();
    }

    return null;

};

export const decrypt = (valueEncrypt: string): string | null => {
    let token = (localStorage.getItem("session"));

    if (token) {
        const valueDecrypt = CryptoJS.AES.decrypt(valueEncrypt, atob(token)).toString(CryptoJS.enc.Utf8);

        return valueDecrypt;
    }

    return null;

    /* if (!valueDecrypt) {
        return null;
    }
    return JSON.parse(valueDecrypt) as T; */
}