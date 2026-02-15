import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function Test7({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (msg) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg }]);

    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div style={{ position: "fixed", top: 10, right: 10 }}>
        {toasts.map((t) => (
          <div key={t.id} style={{ background: "black", color: "white", padding: 10, marginBottom: 6 }}>
            {t.msg}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
