import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@schedule-x/calendar': path.resolve(
  //       __dirname,
  //       '../schedule-x/packages/calendar'
  //     ),
  //     '@schedule-x/drag-and-drop': path.resolve(
  //       __dirname,
  //       '../schedule-x/packages/drag-and-drop'
  //     ),
  //     '@schedule-x/event-modal': path.resolve(
  //       __dirname,
  //       '../schedule-x/packages/event-modal'
  //     ),
  //     '@schedule-x/theme-default': path.resolve(
  //       __dirname,
  //       '../schedule-x/packages/theme-default'
  //     ),
  //   },
  // },
})
