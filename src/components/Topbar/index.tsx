import { StyledFormWrapper, StyledTopbar, StyledTopbarWrapper } from './styled';
import { Github as GithubIcon } from '@styled-icons/boxicons-logos/Github';
import { Input } from '../Input';
import { Button } from '../Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from 'redux/username';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import type { TopbarProps } from './types';

export const Topbar: React.FC<TopbarProps> = ({ onSubmit }) => {
  const { username } = useSelector((state: RootState) => state.username);
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(username);
  const [error, setError] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
    dispatch(changeName(''));
    history.push('/');
  };

  const onSubmitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit();
    if (searchValue.length > 0) {
      dispatch(changeName(searchValue));
      history.push({
        pathname: '/results',
        search: `?name=${searchValue}`,
      });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (username.length > 0) {
      setSearchValue(username);
    }
  }, [username]);
  return (
    <StyledTopbar>
      <StyledTopbarWrapper>
        <GithubIcon className="git-icon" onClick={handleClear} />
        <StyledFormWrapper onSubmit={onSubmitHandler}>
          <Input
            placeholder="Search..."
            onChange={handleUsernameChange}
            onClearClick={handleClear}
            value={searchValue}
            error={error}
          />
          <Button>Submit</Button>
        </StyledFormWrapper>
        <Button
          className="favorites-btn"
          onClick={() => history.push('/favorites')}
        >
          Favorites
        </Button>
      </StyledTopbarWrapper>
    </StyledTopbar>
  );
};
