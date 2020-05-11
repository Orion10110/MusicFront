import React from 'react';
import { getRandomID } from 'shared/utils';
import { List, ListElement, NewListElement, CONTENT_TYPE_NAME, ALBUM_CONTAINER } from 'shared/components';

export const AlbumList = () => {
  return (
    <List listName={CONTENT_TYPE_NAME.albums} listType="list__content_row">
      {ALBUM_CONTAINER.map((element) => <ListElement key={getRandomID()} path={element.path} name={element.name}/>)}
      <NewListElement/>
    </List>
  );
};
