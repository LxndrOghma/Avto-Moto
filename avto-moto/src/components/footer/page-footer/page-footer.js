import React from 'react';
import FooterNav from '../footer-nav/footer-nav';

import './page-footer.scss';

function PageFooter() {
  return(
    <footer className='page-footer'>
      <div className='page-footer__wrapper'>
        <FooterNav />
      </div>
    </footer>
  );
}

export default PageFooter;
