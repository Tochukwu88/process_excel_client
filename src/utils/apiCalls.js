import fetch from "isomorphic-fetch";
const API = "https://process-excel.herokuapp.com/api/v1";

export const saveFIle = async (data) => {
  console.log(data);
  try {
    const response = await fetch(`${API}/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export const getData = async () => {
  try {
    const response = await fetch(`${API}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
