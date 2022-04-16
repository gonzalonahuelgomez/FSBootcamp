const Filter = ({name, onChange}) => {
  return (
    <>
      filter shown with<input value={name} onChange={onChange} />
    </>
  )
}

export default Filter