import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: JSX.Element
};

/**
 * В портал будем оборачивать, например, попапы и поповеры,
 * чтобы к примеру oferflow: hidden не обрезал часть попапа,
 * и чтобы решить проблему с z-индексами
 */
function Portal({ children }: PortalProps): JSX.Element {
  // 1. при первом рендере создаем div и храним его в state
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    // 3. div, наполненный контентов помещаем в конец body
    document.body.appendChild(container);

    // 4. при размонтировании компонента div удаляем из body
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  // 2. кладем children внутрь созданного div
  return ReactDOM.createPortal(children, container);
}

export default Portal;
