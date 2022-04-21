const Filter = ({name, onChange}) => {
  return (
    <>
      find countries<input value={name} onChange={onChange} />
    </>
  )
}

export default Filter