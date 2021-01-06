import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import { TodoListProvider } from 'src/context/TodoContext';

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
    <TodoListProvider>
      <BasicLayout>
        <props.Component {...props.pageProps} />
      </BasicLayout>
    </TodoListProvider>
  );
};

export default MyApp;
