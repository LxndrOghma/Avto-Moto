import React from 'react';
import PageFooter from '../../footer/page-footer/page-footer';
import PageHeader from '../../header/page-header/page-header';
import PageMain from '../../main/page-main/page-main';

import './main-page.scss';

function MainPage() {
  return (
    <div className='container'>
      <PageHeader />
      <PageMain />
      <PageFooter />
    </div>
  );
}

export default MainPage;
