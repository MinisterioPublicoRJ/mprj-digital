/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function useMediaDesktop(mediaDesktop) {
  const [matchDesktop, setmatchDesktop] = useState(null);

  useEffect(() => {
    function changeMatchDesktop() {
      const { matches } = window.matchMedia(mediaDesktop);
      setmatchDesktop(matches);
    }
    window.addEventListener('resize', changeMatchDesktop);
    return () => {
      window.removeEventListener('resize', changeMatchDesktop);
    };
  }, [mediaDesktop]);

  return [matchDesktop];
}
