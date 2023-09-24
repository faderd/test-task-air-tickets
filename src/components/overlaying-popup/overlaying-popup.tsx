import Portal from '../portal/portal';
import useModalMount from './useModalMount';
import Layout from './layout/layout';

type PopupProps = {
  children: JSX.Element,
  isOpen: boolean,
  onClose: () => void,
}

function OverlayingPopup({ children, isOpen, onClose }: PopupProps): JSX.Element | null {
  // если пользователь сразу кликает два раза на, то внесем задержку на время анимации, чтобы модалка хотябы успела появиться на экране. Для этго импользуем кастомный хук useModalMount
  const { mounted } = useModalMount({ isOpen });

  if (!mounted) { return null; }

  return (
    <Portal>
      {/* Декомпозируем код с анимацией попапов в отдельный Layout для лучшей читабельности */}
      <Layout onClose={onClose} isOpen={isOpen}>
        {children}
      </Layout>
    </Portal>
  );
}

export default OverlayingPopup;
