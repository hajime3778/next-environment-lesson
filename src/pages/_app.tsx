import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,   Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

const MyApp = (props: AppProps) => {
  return (
    <BasicLayout>
      <props.Component {...props.pageProps} />
    </BasicLayout>
  );
};

export default MyApp;
