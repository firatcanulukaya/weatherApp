import {useDispatch} from "react-redux";
import {setCity} from "../../redux/weather/weatherSlice";
import styled from "styled-components";

const SearchContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const SearchInput = styled.input`
  padding: .7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;

  &&::placeholder {
    color: #f8f8f8;
  }
`;

const Search = () => {
    const dispatch = useDispatch();

    return (
        <SearchContainer>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(setCity(e.target.elements.city.value));
            }}>
                <SearchInput
                    placeholder='Enter Location'
                    name='city'
                    type="text"/>
            </form>
        </SearchContainer>
    )
}

export default Search;