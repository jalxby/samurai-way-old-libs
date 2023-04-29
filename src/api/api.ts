import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "dc54cee1-ed8e-4559-98ba-13b005df7450" },
  data: {},
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getFollow(userID: number) {
    return instance.get(`follow/${userID}`).then((response) => response.data);
  },

  deleteFollow(userID: number) {
    return instance
      .delete(`follow/${userID}`)
      .then((response) => response.data);
  },

  postFollow(userID: number) {
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },

  getProfile(userID: string) {
    return instance.get(`profile/${userID}`);
  },

  getStatus(userID: string){
    return instance.get(`/profile/status/${userID}`)
  }
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
