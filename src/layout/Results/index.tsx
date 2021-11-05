import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Content } from 'components/Content';
import { Person } from 'components/Person';
import { Topbar } from 'components/Topbar';
import { getUsers } from 'services/http';
import type { UserProps } from 'layout/Results/types';
import { changeName } from 'redux/username';
import { updateFavorites } from 'redux/favorites';
import { usePrevious } from 'components/hooks/usePrevious';

export const Results = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.username);
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('ascending');

  const forceUpdate: () => void = React.useState()[1].bind(null, {} as any);

  const getUserData = useCallback(
    async (username) => {
      if (username.length > 0) {
        try {
          const user = await getUsers(username, page);
          setLoading(true);
          if (user.length === 0 && page > 1) {
            setError(true);
          } else if (user.length === 0) {
            setError(true);
            setData([]);
          } else {
            setError(false);
            setData(user);
          }
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    },
    [page],
  );

  const slugName = window.location.search.replace('?name=', '') || '';

  useEffect(() => {
    getUserData(username);
  }, [username, getUserData]);

  useEffect(() => {
    if (slugName.length > 0) {
      dispatch(changeName(slugName));
      getUserData(slugName);
    }
  }, [slugName, getUserData, dispatch]);

  const incrementPageNum = () => setPage((p) => p + 1);
  const decrementPageNum = () => setPage((p) => Math.max(1, p - 1));
  const checkForExistingData = data.length > 0 && true;

  const sortData = useCallback(
    (sortingType: string) => {
      if (sortingType === 'ascending') {
        const sortingAsc = data.sort(
          (a: any, b: any) => parseFloat(a.id) - parseFloat(b.id),
        );
        setData(sortingAsc);
      } else {
        const sortingDesc = data.sort(
          (a: any, b: any) => parseFloat(b.id) - parseFloat(a.id),
        );
        setData(sortingDesc);
      }
      forceUpdate();
    },
    [data, forceUpdate],
  );

  const prevSort = usePrevious(sortType);
  useEffect(() => {
    if (prevSort !== sortType) {
      sortData(sortType);
    }
  }, [prevSort, sortType, sortData]);

  return (
    <React.Fragment>
      <Topbar onSubmit={() => setPage(1)} />
      <Content
        hideTitle={checkForExistingData}
        onPreviousClick={decrementPageNum}
        onNextClick={incrementPageNum}
        pageNum={page}
        numOfUsers={data.length}
        error={error}
        loading={loading}
        returnSortType={(selectedSort: string) => setSortType(selectedSort)}
      >
        {data.map(
          (
            {
              login: name,
              avatar_url: photo,
              html_url: url,
              type,
              id,
            }: UserProps,
            index: number,
          ) => (
            <Person
              favorites={favorites}
              key={id}
              name={name}
              photo={photo}
              url={url}
              type={type}
              id={id}
              selectedPerson={{ name: name }}
              onAddFavoritesClick={() => {
                dispatch(updateFavorites(data[index]));
              }}
            />
          ),
        )}
      </Content>
    </React.Fragment>
  );
};
