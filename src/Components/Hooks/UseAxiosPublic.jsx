import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-server-eight-woad.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
