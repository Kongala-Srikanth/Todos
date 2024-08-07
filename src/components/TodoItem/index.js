// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteClick} = props
  const {id, title} = todo

  const onDeleteButton = () => onDeleteClick(id)

  return (
    <li className="listItem">
      <p className="title">{title}</p>
      <button className="del-btn" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
