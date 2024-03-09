import axios from "axios";

export const createCommentsRequest = async (comment) => {
  const form = new FormData();
  for (let key in comment) {
    form.append(key, comment[key]);
  }
  return await axios.post("http://localhost:5000/comments", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
