import React from 'react';
import { Layout } from 'src/components/Layout';
import { TodoItem } from 'src/components/TodoItem';

export default function Home() {
  return (
    <Layout title="Title" visibleRegister={true}>
      <TodoItem />
    </Layout>
  );
}
