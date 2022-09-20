import MakeRequest from "../../utils/apiHandler";

export async function sigupUserApiCall(body = { username: "", password: "" }) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/user").put(body);
    console.log("FROM signupAPI ", result);
    if (result.status === 200) {
      return { state: true, data: result.data.message };
    } else {
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function loginUserAPIcall(body = { username: "", password: "" }) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/user").post(body);
    console.log("FROM LoginAPI ", result);
    if (result.status === 200) {
      return { state: true, data: result.data };
    } else {
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}
