import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import usePageBottom from './utils/use-page-bottom';
import { loadCharacters } from './actions/characters';
import { getCharacters } from './selectors/characters';
import AppBar from './components/AppBar';
import ProfilesGrid from './components/ProfilesGrid';

function Main(): React.ReactElement {
  const dispatch = useDispatch();
  const characters = useSelector(getCharacters);
  const { items, isLoading, error } = characters;
  const isPageBottom = usePageBottom();
  useEffect(() => {
    if (isEmpty(items) || isPageBottom) {
      // Load characters when component has been just mounted or
      // while we reach at the bottom of the page
      dispatch(loadCharacters());
    }
  }, [items, isPageBottom, dispatch]);

  return (
    <>
      <AppBar />
      <ProfilesGrid profiles={items} error={error} isLoading={isLoading} />
    </>
  );
}

export default Main;
