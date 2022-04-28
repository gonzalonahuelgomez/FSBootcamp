const DeleteButton = ({text, handleClick}) => {
  console.log(handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default DeleteButton