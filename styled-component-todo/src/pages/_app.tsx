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

const todoListSampleData = [
  {
    id: 0,
    title: 'Sample title1',
    description: 'Sample description1',
  },
  {
    id: 1,
    title: 'Sample title2',
    description: 'Sample description2',
  },
  {
    id: 2,
    title: 'Sample title3',
    description: 'Sample description3',
  },
];

const MyApp = (props: AppProps) => {
  return (
    <TodoListProvider initTodoList={todoListSampleData}>
      <BasicLayout>
        <props.Component {...props.pageProps} />
      </BasicLayout>
    </TodoListProvider>
  );
};

export default MyApp;
