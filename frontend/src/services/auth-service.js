import {HttpUtils} from "../utils/http-utils";
import {AuthUtils} from "../utils/auth-utils";

export class AuthService {
    static async login(data) {
        const result = await HttpUtils.request('/login', 'POST', false, data)

        if (result.error || !result.response || (result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name))) {
            return false;
        }

        return result.response;
    }

    static async signUp(data) {
        const result = await HttpUtils.request('/signup', 'POST', false, data);

        if (result.error || !result.response || (result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name))) {
            return false;
        }

        return result.response;
    }

    static async logout(data) {
        const result = await HttpUtils.request('/logout', 'POST', false, data);
    }
}

// const loginResult = AuthService.login({
//     email: this.emailElement.value,
//     password: this.passwordElement.value,
//     rememberMe: this.rememberMeElement.checked
// });
//
// if (loginResult) {
//     AuthUtils.setAuthInfo(loginResult.accessToken, loginResult.refreshToken, {
//         id: loginResult.id,
//         name: loginResult.name
//     });
//
//     this.openNewRoute('/');
// }
//
// this.commonErrorElement.style.display = 'block';