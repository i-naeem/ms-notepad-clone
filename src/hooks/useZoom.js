import { useEffect, useState } from 'react';

export const useZoom = () => {
  const [zoom, setZoom] = useState(100);
  useEffect(() => {
    /* 
      Below code snippet is taken from https://thewebdev.info/2021/03/10/how-to-detect-page-zoom-levels-in-modern-browsers/ article wrritten by John Au-Yeung. Just giving credit to the man as this solution worked for me.
     */

    window.addEventListener('resize', () => {
      const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
      setZoom(browserZoomLevel);
    });
  }, []);

  return zoom;
};
