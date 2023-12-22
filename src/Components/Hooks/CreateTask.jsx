import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./UseAxiosPublic";
import Swal from "sweetalert2";

const CreateTask = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  // =================================================================
  const handleAddTask = async (event) => {
    event.preventDefault();

    const form = event.target;
    const TaskName = form.TaskName.value;
    const TaskTitle = form.TaskTitle.value;
    const TaskDeadlines = form.TaskDeadlines.value;
    const TaskPriority = form.TaskPriority.value;
    const TaskDescription = form.TaskDescription.value;

    // creating objects

    const AddTasks = {
      TaskName: TaskName,
      TaskTitle: TaskTitle,
      TaskDeadlines: TaskDeadlines,
      TaskPriority: TaskPriority,
      TaskDescription: TaskDescription,
      TaskUserName: user.displayName,
      TaskUserEmail: user.email,
      TaskUserPhotoURL: user.photoURL,
    };
    console.log(AddTasks);
    // Add product data to mongodb
    const res = await axiosPublic.post("/AllUserTasks", AddTasks);

    if (res.data.insertedId) {
      Swal.fire("The Product has been added successfully");
      navigate("/dashboard/myProduct");
      navigate("/dashboard");
    }
  };

  // =================================================================
  return (
    <>
      <section>
        <div className=" py-6">
          <h1 className="text-2xl lg:text-5xl bg-gradient-to-br from-purple-600 to-cyan-300 text-transparent bg-clip-text font-bold text-center">
            Create New Tasks
          </h1>
        </div>
      </section>

      {/* form section */}
      <section className="px-6 lg:px-56">
        <div className="bg-gradient-to-br from-purple-600 to-cyan-300 p-4 md:p-24">
          <form onSubmit={handleAddTask}>
            {/* add product */}
            <div className="mb-4 md:flex">
              <div className="form-control mb-4 md:w-1/2 md:mr-2">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Task Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="TaskName"
                    required
                    placeholder="Task Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control mb-4 md:w-1/2 md:mr-2">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Task Title
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="TaskTitle"
                    required
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Task Deadline
                </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="TaskDeadlines"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Task priority
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="TaskPriority"
                  required
                  placeholder="Low / Moderate / High"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Review Description and Rating of the product row */}
            <div className="mb-4 md:flex">
              <div className="form-control mb-4 md:w-full md:mr-2">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Task Description
                  </span>
                </label>
                <label className="input-group">
                  <textarea
                    name="TaskDescription"
                    placeholder="Write description here......."
                    required
                    className="input input-bordered w-full h-40 md:h-auto"
                  ></textarea>
                </label>
              </div>

              {/* Product Owner info */}
            </div>
            <input
              type="submit"
              value="Add To-Do-List"
              className="btn btn-block bg-gradient-to-br from-purple-600 to-cyan-300 text-white hover:text-black"
            />
          </form>
        </div>
      </section>

      {/* form section */}
    </>
  );
};

export default CreateTask;
