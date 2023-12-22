import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/Hooks/UseAxiosPublic";
import UseUserAddedTask from "../../Components/Hooks/UseUserAddedTask";
import { FaFileSignature, FaArrowRight } from "react-icons/fa";

const MyToDoList = () => {
  const axiosPublic = useAxiosPublic();
  const [userAddedTasks, refetch] = UseUserAddedTask();

  const handleTaskOngoing = (item) => {
    axiosPublic.patch(`/userTaskOngoing/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.TaskName} is Ongoing Now!!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handleTaskComplete = (item) => {
    axiosPublic.patch(`/userTaskComplete/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.TaskName} Task has been Completed!!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 py-8">
          <h1 className="text-3xl font-bold text-center text-white">
            My To-Do-List
          </h1>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-12 px-12">
          {/* To-Do Section */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2">
            <h1 className="text-2xl font-bold text-white text-center">To-Do</h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter(
                  (items) => !items.OngoingTask && !items.CompleteTaskStatus
                )
                .map((task, index) => (
                  <li key={task._id}>
                    {index + 1}. {task.TaskName}
                    <div>
                      {!task.OngoingTask && (
                        <button
                          onClick={() => handleTaskOngoing(task)}
                          className="btn bg-cyan-500"
                        >
                          <FaFileSignature className="text-white text-xl" />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
            </ol>
          </div>

          {/* Ongoing Section */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2">
            <h1 className="text-2xl font-bold text-white text-center">
              Ongoing
            </h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter(
                  (items) => items.OngoingTask && !items.CompleteTaskStatus
                )
                .map((task, index) => (
                  <li key={task._id}>
                    {index + 1}. {task.TaskName}
                    <div>
                      {!task.CompleteTaskStatus ? (
                        <button
                          onClick={() => handleTaskComplete(task)}
                          className="btn bg-cyan-500 btn-xl"
                        >
                          <FaArrowRight className="text-white text-2xl" />
                        </button>
                      ) : (
                        "Completed"
                      )}
                    </div>
                  </li>
                ))}
            </ol>
          </div>

          {/* Completed Tasks Section */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2">
            <h1 className="text-2xl font-bold text-white text-center">
              Completed Tasks
            </h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter((items) => items.CompleteTaskStatus)
                .map((task, index) => (
                  <li key={task._id}>
                    {index + 1}. {task.TaskName}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyToDoList;
