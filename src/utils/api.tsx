import axios from "axios";

export const apiPostComments = (title) => {
  console.log(title);
  return axios({
    method: "post",
    url: `https:localhost:8008/goals`,
    data: { title },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
