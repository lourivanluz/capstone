import { SearchContainer } from "./style";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { useProducts } from "../../../Providers/Products";

export const Search = ({ setShowSearch }) => {
  const [userInput, setUserInput] = useState("");
  const { filteredInputProducts, filterPerInput } = useProducts();

  useEffect(() => {
    filterPerInput(userInput);
  }, [userInput]);

  return (
    <SearchContainer>
      <div className="inputsContainer">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>
          <ImSearch />
        </button>
        <button className="closeSearch" onClick={() => setShowSearch(false)}>
          x
        </button>
      </div>

      <ul>
        {filteredInputProducts.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </SearchContainer>
  );
};
