import axios from "axios";

const api_url = import.meta.env.VITE_API + "/api";
const axiosPublic = axios.create({
  baseURL: api_url,
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
