import React, { useState } from 'react';
import PageFooter from '../../footer/page-footer/page-footer';
import PageHeader from '../../header/page-header/page-header';
import PageMain from '../../main/page-main/page-main';

import './main-page.scss';

function MainPage() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <div className={`container ${isModalShown ? 'container--modal-shown' : ''}`}>
      <PageHeader />
      <PageMain onModalShown={setIsModalShown} />
      <PageFooter />
    </div>
  );
}

export default MainPage;
