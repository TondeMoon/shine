import React, { useState } from 'react';
import { Grid, Card } from '@mui/material';
import { Link } from 'react-router-dom';

import Navbar from '../navbar';
import person from '../../../images/personW.svg';
import logo from '../../../images/logoNew.svg';
import bell from '../../../images/bell.svg';
import burger from '../../../images/burgerGrey.svg';
import close from '../../../images/xCross.svg';
import './TopHeader.scss';

const TopHeader = (): JSX.Element => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const toggle = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <>
      <div className='TopHeader' style={{ backgroundColor: 'rgb(51,51,51)' }}>
        <Grid className='WidthContainer' container>
          <Grid className='Logo' item lg={5} md={3} sm={8} xl={6} xs={8}>
            <Link to={'/'}>
              <img alt='logo' height={31} src={logo} width={183} />
            </Link>
          </Grid>
          <Grid className='Navbar' item lg={5} md={6} xl={4}>
            <Navbar toggle={toggle} topHeader={false} />
          </Grid>
          <Grid className='iconMenu' item lg={2} md={3} sm={4} xl={2} xs={4}>
            <div>
              <Link to='/demo/ms'>
                <img alt='bell' className='Bell' src={bell} />
              </Link>
            </div>
            <div>
              <Link to='/demo/lk'>
                <img alt='personal' className='Person' src={person} />
              </Link>
            </div>
            <div className='BurgerButton' onClick={toggle} role='button'>
              <img alt='burger menu' className='Burger' src={burger} />
            </div>
          </Grid>
        </Grid>
        <div className={sideMenuOpen ? 'Modal' : 'None'}>
          <div className='ModalHeading'>
            <button className='CloseButton' onClick={toggle} type='button'>
              <img alt='close' src={close} />
            </button>
          </div>
          <div className='ModalNavbar'>
            <Card className='MenuBlockLower'>
              <div className='MenuPoints'>
                <Navbar toggle={toggle} topHeader />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
