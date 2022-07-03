import { useState, useEffect } from "react";
import getAllTasks from "../../services/tasksServices";

function ListAllTasks() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const findAllTasks = async () => {
      try {
        const request = await getAllTasks();
        setAllTasks(request);

      } catch (error) {
        throw new Error({
          message: 'erro when calling service'
        })
      }
    }
    findAllTasks();
  }, []);

  return (
    <div>
      <ul>
        {
          allTasks.map(({ id, status, work }) => (
            <div key={id}>
              <li>{work}</li>
              <span>{status}</span>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default ListAllTasks;