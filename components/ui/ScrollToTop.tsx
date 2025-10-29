
import { useEffect } from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = Router.useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
