export default function AddTaskButton() {

  function sayHello() {
    console.log('sayHello')
  };

return(
  <button
    type='button'
    data-testid='button-add-task'
    onClick={ sayHello }
  />
)
}