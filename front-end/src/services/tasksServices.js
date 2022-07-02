import axios from 'axios';

async function getAllTasks() {
  try {
    const { data } =  await axios.get('http://localhost:3001/tasks');
    return data;
  } catch (error) {
    throw new Error({ message: 'error in method GET' })
  }
}

export default getAllTasks;