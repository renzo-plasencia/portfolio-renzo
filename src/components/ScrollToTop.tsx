import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Espera un pequeño delay para asegurar el render
    setTimeout(() => {
      // Si tiene hash, intenta scroll al elemento con ese ID
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si no tiene hash, scroll al top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Delay para asegurar que el DOM ya se renderizó
  }, [location]);

  return null;
}
