const FilterByName = (props) => {
  return (
    <>
      <label className='form__label-name' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
    </>
  );
};

export default FilterByName;
