const Filter = ({name, onChange}) => {
  return (
    <>
      filter shown <input value={name} onChange={onChange} />
    </>
  )
}

export default Filter