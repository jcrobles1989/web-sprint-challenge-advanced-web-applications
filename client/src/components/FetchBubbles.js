import { axiosWithAuth } from "../utils/axiosWithAuth";

const FetchBubbles = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err.message);
      return err;
    });
};

export default FetchBubbles;
