import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./UseAxiosPublic";

const UseUserAddedTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const { refetch, data: userAddedTasks = [] } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userAddedTaskByEmail?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [userAddedTasks, refetch];
};

export default UseUserAddedTask;
