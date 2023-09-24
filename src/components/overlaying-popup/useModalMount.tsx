import { useEffect, useState } from 'react'
import { MODAL_ANIMATION_TIME } from './layout/const';

type useModalMountProps = {
  isOpen: boolean;
};


function useModalMount({ isOpen }: useModalMountProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen && !mounted) {
      setMounted(true);
    } else if (!isOpen && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, MODAL_ANIMATION_TIME);
    }
  }, [isOpen, mounted])

  return {
    mounted,
  };
}

export default useModalMount
