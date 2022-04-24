const DeleteButton = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default DeleteButton