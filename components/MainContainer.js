import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"test" + keywords} />
        <title>Next.js</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
        <A href="/about" text="О нас" />
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer