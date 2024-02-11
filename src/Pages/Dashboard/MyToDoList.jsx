import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/Hooks/UseAxiosPublic";
import UseUserAddedTask from "../../Components/Hooks/UseUserAddedTask";
import {
  FaFileSignature,
  FaArrowRight,
  FaTrashRestoreAlt,
} from "react-icons/fa";

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

  // =================================================================

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/userCompletedTask/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // ====================================================================
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
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2 rounded-lg">
            <h1 className="text-2xl font-bold text-white text-center border-b-2">
              To-Do
            </h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter(
                  (items) => !items.OngoingTask && !items.CompleteTaskStatus
                )
                .map((task, index) => (
                  <div className="flex items-center" key={task._id}>
                    <div>
                      <li>
                        {index + 1}. {task.TaskName}
                      </li>
                    </div>
                    <div className="ml-auto mt-2">
                      {!task.OngoingTask && (
                        <button
                          onClick={() => handleTaskOngoing(task)}
                          className="px-2 py-2 rounded-sm"
                        >
                          <FaFileSignature className="text-white text-xl hover:text-purple-700" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </ol>
          </div>

          {/* Ongoing Section */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2 rounded-lg">
            <h1 className="text-2xl font-bold text-white text-center border-b-2">
              Ongoing
            </h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter(
                  (items) => items.OngoingTask && !items.CompleteTaskStatus
                )
                .map((task, index) => (
                  <div className="flex items-center" key={task._id}>
                    <div>
                      <li>
                        {index + 1}. {task.TaskName}
                      </li>
                    </div>
                    <div className="ml-auto mt-2">
                      {!task.CompleteTaskStatus ? (
                        <button
                          onClick={() => handleTaskComplete(task)}
                          className="rounded-lg"
                        >
                          <FaArrowRight className="text-white text-2xl hover:text-purple-700" />
                        </button>
                      ) : (
                        "Completed"
                      )}
                    </div>
                  </div>
                ))}
            </ol>
          </div>

          {/* Completed Tasks Section */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl py-2 rounded-lg">
            <h1 className="text-2xl font-bold text-white text-center border-b-2">
              Completed Tasks
            </h1>
            <ol className="px-4 mt-2 text-white font-bold">
              {userAddedTasks
                .filter((items) => items.CompleteTaskStatus)
                .map((task, index) => (
                  <div className="flex items-center" key={task._id}>
                    <div>
                      <li>
                        {index + 1}. {task.TaskName}
                      </li>
                    </div>
                    <div className="ml-auto">
                      <td className="py-2">
                        <button
                          onClick={() => handleDeleteProduct(task._id)}
                          className=""
                        >
                          <FaTrashRestoreAlt className="text-white text-xl hover:text-red-600" />
                        </button>
                      </td>
                    </div>
                  </div>
                ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyToDoList;
