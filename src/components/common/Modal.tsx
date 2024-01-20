import { FC, ReactNode, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal: FC<Props> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind the modal
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling when the modal is closed
    }

    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling when the component unmounts
    };
  }, [isOpen]);

  return (
    <div
      className={`
        modal

        fixed
        inset-0
        flex
        items-center
        justify-center
        z-50
        overflow-y-auto
        h-screen
        py-10
        bg-black
        bg-opacity-50
        transition
        duration-300

        ${isOpen ? `visible opacity-100` : `invisible opacity-0`}
      `}
    >
      <div
        className={`
          modal__content

          relative
          top-0
          w-full
          h-full
          mx-10

          phone:mx-5

          ${className}
        `}
      >
        <button
          className="modal__content-close absolute top-3 right-4 text-gray-500 text-xl hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>

        <div className="modal__content-wrapper pb-10">
          <div className="modal__content-inner p-10 bg-white rounded-xl phone:p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
