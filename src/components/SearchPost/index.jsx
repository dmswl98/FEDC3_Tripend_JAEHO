import {
  SearchWrapper,
  SearchContainer,
  SearchInput,
  SearchResultList,
  SearchResultItem,
} from './style';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { encodeKeyword } from '../../utils/validate/userList';
import { searchAll } from '../../apis/search';
import { filterdPost } from '../../utils/validate/searchedPostLIst';
import { useNavigate } from 'react-router-dom';

const SearchPost = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async (encodedKeyword) => {
    const { data } = await searchAll(encodedKeyword);
    setSearchResult(filterdPost(data));
  };

  const handleClickItem = (postId) => {
    setKeyword('');
    navigate();
  };

  useDebounce(
    () => {
      keyword.length > 0 ? getSearchResult(encodeKeyword(keyword)) : setSearchResult([]);
    },
    300,
    [keyword]
  );
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchIcon sx={{ color: '#d1d1d1' }} />
        <SearchInput
          value={keyword}
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchContainer>
      {searchResult.length ? (
        <SearchResultList>
          {searchResult.map((item) => (
            <SearchResultItem key={item._id} onClick={() => handleClickItem(item._id)}>
              {item.title}
            </SearchResultItem>
          ))}
        </SearchResultList>
      ) : null}
    </SearchWrapper>
  );
};

export default SearchPost;
