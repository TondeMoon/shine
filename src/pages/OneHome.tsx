/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

import BookPageWrap from '../components/bookPageComponents/bookPageWrap/BookPageWrap';
import Statement from '../components/myHomesComponents/statement/Statement';
import houses from '../utils/houses.json';
import statement from '../utils/statements.json';

export default function Booking(): JSX.Element {
  const location = useLocation();
  // @ts-ignore
  const home = houses.filter((el) => el._id === location.pathname.replace('/demo/myhomes/', ''));

  return (
    <>
      <div className='emptyHeight' />
      <Typography className='title' component='div' gutterBottom variant='h1'>
        {statement.title}
      </Typography>
      <BookPageWrap bookPage={false} children={<Statement houses={home[0]} />} houses={home[0]} title={home[0]?.name} />
    </>
  );
}
