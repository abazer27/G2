"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../ui/LoadingScreen";

interface AppContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  finishLoading: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      finishLoading();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, finishLoading }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" isLoading={isLoading} />
        ) : (
          <div key="content">{children}</div>
        )}
      </AnimatePresence>
    </AppContext.Provider>
  );
}
