import { useEffect, useState } from 'react';

export const useZoom = () => {
  const [zoom, setZoom] = useState(100);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
      setZoom(browserZoomLevel);
    });
  }, []);

  return zoom;
};
