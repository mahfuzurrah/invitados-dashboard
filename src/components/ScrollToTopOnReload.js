import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnReload() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTopOnReload;
