import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import { getHeroByName } from '../helpers';

interface SearchText {
  searchText: string;
}

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search) as { q: string; };
  const heros = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heros.length === 0;

  const { onInputChange, searchText } = useForm<SearchText>({ searchText: q as string });

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form className='form' onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              onChange={onInputChange}
              value={searchText}
              className='form-control'
              placeholder='search'
              autoComplete='off'
            />
            <button className='btn btn-primary mt-1'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary  animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
          <div className='alert alert-danger  animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none' }}>
            No hero with: <b>{q}</b>
          </div>
          {
            heros.map(hero => (
              <HeroCard {...hero} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SearchPage;