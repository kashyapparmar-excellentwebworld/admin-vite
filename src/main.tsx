import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from './components'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="light">
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center bg-white">
                <Loader />
              </div>
            }
          />
          <div className='bg-gray-50 min-h-screen w-full dark:bg-black/90' >
            <App />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
