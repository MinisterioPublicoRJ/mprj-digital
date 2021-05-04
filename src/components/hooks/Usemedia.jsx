/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function useMedia(media) {
  const [matchMobile, setmatchMobile] = useState(null);

  useEffect(() => {
    function changeMatchMobile() {
      const { matches } = window.matchMedia(media);
      setmatchMobile(matches);
    }
    window.addEventListener('resize', changeMatchMobile);
    changeMatchMobile();
    return () => {
      window.removeEventListener('resize', changeMatchMobile);
    };
  }, [media]);
  return matchMobile;
}
