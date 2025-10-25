import { createContext, useContext, useState } from "react";
import ToastList, { type Toast } from "../components/toast-list/toast-list";
import { v4 as uuidv4 } from 'uuid'

type ToastContextType = { addToast: (message: string) => void };

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string) => {
    const newToast: Toast = { id: uuidv4(), message, type: 'info' };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastList toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastContextProvider");
  return ctx;
};