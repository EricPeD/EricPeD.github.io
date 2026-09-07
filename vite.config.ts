import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si el repo se llama EricPeD.github.io, deja base en '/'.
  // Si en cambio publicas esto como un repo de proyecto normal
  // (p. ej. github.com/EricPeD/portfolio), cambia esto a '/portfolio/'.
  base: '/',
})
