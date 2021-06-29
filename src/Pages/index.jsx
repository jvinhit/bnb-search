import React, { useState, useEffect } from 'react';
import { useDebounce, useLoading } from '../Hooks';
import SearchInput from '../Components/InputSearch';
import searchPlaces from '../Services/autocompletes';
import DropDown from '../Components/DropDown';
import { CONSTANT } from '../Constants';

const FindPlacePages = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const searchValue = useDebounce(query, 300);
  const fetchPlaces = async () => {
    const products = await searchPlaces(searchValue);
    if (products.isError) {
      setData([]);
      return;
    }

    setData(products?.autocomplete_terms || []);
  };

  const [getPlaces, isLoadingPlaces] = useLoading(fetchPlaces);

  useEffect(() => {
    if (searchValue.trim()) {
      getPlaces();
    } else {
      setData([]);
    }
  }, [searchValue]);

  return (
    <div>
      <SearchInput
        loading={isLoadingPlaces}
        defaultValue={query}
        onChange={(e) => setQuery(e)}
        placeholder={CONSTANT.SEARCH_PL}
      />
      <DropDown data={data} />

    </div>
  );
};

export default FindPlacePages;
