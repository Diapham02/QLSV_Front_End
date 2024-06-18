import { useState } from "react";

const Search = (props) => {
  const { onSearch } = props;
  const [valueInput, setvalueInput] = useState("");

  const handleInputChange = (xuly) => {
    setvalueInput(xuly.target.value);
  };

  const handleSearch = () => {
    onSearch(valueInput);
  };

  return (
    <div className="form-search">
      <label className="labelsearch" htmlFor="txtTuKhoa">
        Từ khóa
      </label>
      <div className="Search">
        <input
          type="text"
          id="txtTuKhoa"
          name="txtTuKhoa"
          placeholder="Từ khóa cần tìm"
          value={valueInput}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSearch}>Tìm Kiếm</button>
    </div>
  );
};

export default Search;
