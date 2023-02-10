import { ToastContainer, toast } from 'react-toastify';

export const AlertComponent = () => {
  return (
    <ToastContainer
      theme="colored"
      position="bottom-center"
      closeOnClick
      pauseOnHover
      bodyStyle={{
        width: '100%',
        maxWidth: '400px',
      }}
    />
  );
};

export const notify = (
  message: string,
  notificationType?: 'success' | 'error',
) => {
  switch (notificationType) {
    case 'success':
      return toast.success(message);
    case 'error':
      return toast.error(message);
    default:
      toast.warning(message);
  }
};
