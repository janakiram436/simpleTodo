const TodoItem = props => {
  const {todoList, onDeleteUser} = props
  const {id, title} = todoList
  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
