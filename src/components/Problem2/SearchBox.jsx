const SearchBox = ({ searchInput, setSearchInput }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchInput(event.target.value.toLocaleLowerCase());
    }
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={searchInput}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())}
        onKeyPress={handleKeyPress}
      />
      {console.log(searchInput)}
    </>
  );
};

export default SearchBox;
