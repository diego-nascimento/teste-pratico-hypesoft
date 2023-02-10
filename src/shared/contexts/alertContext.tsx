import { createContext, PropsWithChildren, useContext } from 'react';
import { Id } from 'react-toastify';
import { AlertComponent, notify } from '../components/AlertComponent';

interface AlertContextTypes {
  notify: (
    message: string,
    notificationType?: 'success' | 'error',
  ) => Id | undefined;
}

const AlertContext = createContext({} as AlertContextTypes);

const AlertProvider = ({ children }: PropsWithChildren) => {
  return (
    <AlertContext.Provider value={{ notify }}>
      <AlertComponent />
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => {
  return useContext(AlertContext);
};

export { useAlertContext, AlertProvider };
