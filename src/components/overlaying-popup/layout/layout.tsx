import { CSSTransition } from 'react-transition-group';
import styles from './overlaying-popup.module.less';
import { MODAL_ANIMATION_TIME } from './const';
import animationStyles from './animation-styles.module.less';
import { useEffect, useRef, useState } from 'react';

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

type LayoutProps = {
  children: JSX.Element,
  onClose: () => void,
  isOpen: boolean,
};

function Layout({ children, onClose, isOpen }: LayoutProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Чтобы запустилась анимация открытия, свойство in в CSSTransition должно поменяться с false на true, а isOpen изначально приходит true.     Поэтому введем animationIn, который изначально false, а в состоянии ComponentDidMount в useEffect он сменится на true и запустится анимация.
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(isOpen);
  }, [isOpen]);

  return (
    <div className={styles.container} role='dialog'>

      {/* overlay делаем кликамельным, чтобы при клике по нему попап можно было закрыть, tabIndex чтобы на него можно было папасть с клавиатуры */}
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={MODAL_ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div
          className={styles.overlay}
          role='button'
          tabIndex={0}
          onClick={onClose}
          ref={overlayRef}
        />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={MODAL_ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

export default Layout;
