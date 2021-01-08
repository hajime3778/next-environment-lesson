import * as nextRouter from 'next/router'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// ダミーデータは適宜変更する
nextRouter.useRouter = () => ({
  route: "/",
  pathname: "/about",
  query: { id: '1' },
  asPath: "",
  basePath: "",
})