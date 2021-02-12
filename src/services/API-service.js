export default class ApiService {
  _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";
  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("incorrect server response");
    }
    return await res.json();
  };
  getUsers = async (page = 1, count = 6) => {
    const res = await this.getResourse(`/users?page=${page}&count=${count}`);
    return res;
  };
  getOneUser = async (id) => {
    const res = await this.getResourse(`/users${id}`);
    return res;
  };
  getToken = async () => {
    const res = await this.getResourse(`/token`);
    return res;
  };
  getPositions = async () => {
    const res = await this.getResourse(`/positions`);
    return res;
  };
  postUser = async (formData) => {
    const tokenRes = await this.getToken();
    const token = tokenRes.token;
    const res = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: { Token: token },
      }
    );
  return res
  };

}
