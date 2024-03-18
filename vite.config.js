import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/vite-react-routes-tmp/"
})

// import.meta.env.BASE_URL - getting url from base: "/vite-react-routes-tmp/"
