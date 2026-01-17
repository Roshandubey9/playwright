import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './Playwright Test',

   timeout: 30000,

  reporter: 'html',

  fullyParallel: false,

  use: {
    trace: 'off',        // ❌ Trace OFF
    video: 'off',        // ❌ Video recording OFF
    screenshot: 'off',   // ❌ Screenshot OFF
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,                 // ✅ maximize window
        launchOptions: {
          args: ['--start-maximized'],  // ✅ maximize window
        },
      },
    },
  ],
});
