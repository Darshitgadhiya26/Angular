import { sendEmailVerification } from "firebase/auth";

export enum ErrorEnum {
    invalidCredential = "auth/invalid-login-credentials"
}


export enum ErrorMsg {
    invalidCredential = "Invalid Email Or Password."
}

export enum ToastMsg {
    loginSuccess = "Login successfully.",
    sendEmailVerification = "Please check your mail !"
}

export enum ToastClass {
    success = "snackbar-success",
    error = "snackbar-error",
    warning = "snackbar-warning",
    info = "snackbar-info"
}

