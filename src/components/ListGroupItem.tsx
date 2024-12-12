'use client';

import { ListGroupItem as ListGroupItemComponent } from 'react-bootstrap';
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

type ListGroupItemProps = {
    children: React.ReactNode
};
const ListGroupItem: React.FC<ListGroupItemProps> = ({ children }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <ListGroupItemComponent data-bs-theme={themeCtx?.theme}>
      {children}
    </ListGroupItemComponent>
  );
};

export default ListGroupItem;
