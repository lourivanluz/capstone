import { SearchContainer } from "./style";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useProducts } from "../../../Providers/Products";
import CardSearch from "../../CardSearch";
import { TextField } from "./style";

export const Search = ({ setShowSearch }) => {
  const [userInput, setUserInput] = useState("");
  const { filteredInputProducts, filterPerInput } = useProducts();

  useEffect(() => {
    filterPerInput(userInput);
  }, [userInput]);

  return (
    <SearchContainer>
      <div className="inputsContainer">
        <TextField
          type="text"
          value={userInput}
          size="small"
          variant="standard"
          placeholder="fome do que?"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="closeSearch" onClick={() => setShowSearch(false)}>
          <IoMdClose />
        </button>
      </div>

      <ul>
        {filteredInputProducts.map((product) => (
          <CardSearch product={product} setShowSearch={setShowSearch} />
        ))}
      </ul>
    </SearchContainer>
  );
};
