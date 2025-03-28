import '@mantine/core/styles.css'; // Import Mantine styles
import { MantineProvider } from '@mantine/core';
import '@/styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
export default MyApp;