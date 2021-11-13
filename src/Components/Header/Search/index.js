import { SearchContainer } from "./style";
import { ImSearch } from "react-icons/im";

export const Search = ({ setShowSearch }) => {
  return (
    <SearchContainer>
      <div className="inputsContainer">
        <input type="text" />
        <button>
          <ImSearch />
        </button>
        <button className="closeSearch" onClick={() => setShowSearch(false)}>
          x
        </button>
      </div>

      <p>lista dos produtos</p>
    </SearchContainer>
  );
};
