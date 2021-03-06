import './global.css';

import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

/* 
Next-seo is integrated by default, if you want more information and how to
setup more elements, visit their Github page https://github.com/garmeeh/next-seo
*/

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: '',
          site_name: 'Supanextail',
        }}
        twitter={{
          handle: '@michael_webdev',
          site: '@michael_webdev',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
