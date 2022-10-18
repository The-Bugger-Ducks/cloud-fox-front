import { User } from "../../interfaces/user";

class SessionController {
  clearRecords() {
    localStorage.clear();
  }

  getToken() {
    const sessionToken = localStorage.getItem("authentication_token");

    if (!sessionToken) return null

    const token: string = JSON.parse(sessionToken);

    return token
  }

  setToken(token: string) {
    localStorage.setItem("authentication_token", JSON.stringify(token));
  }


  setUserInfo(user: User) {
    localStorage.setItem("user_data", JSON.stringify(user));
  }

  clearUserInfo() {
    localStorage.removeItem("user_data");
  }

  getUserInfo() {
    const sessionUser = localStorage.getItem("user_data");

    if (!sessionUser) return null

    const user: User = JSON.parse(sessionUser);

    return user
  }
}



export default new SessionController();
