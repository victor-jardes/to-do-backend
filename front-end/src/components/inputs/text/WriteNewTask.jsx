export default function WriteNewTask() {

  return (
    <label htmlFor="write-input">
      New Task:
      <input
        type="text"
        name=""
        data-testid="input-write-task"
        id="write-input"
        placeholder='write new task...'
        />
    </label>
  )
}