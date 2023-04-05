import Head from "next/head";
import MainContainer from "../components/MainContainer";

const index = () => {
  return (
    <>
      <MainContainer keywords=" main-page">
        <div>
          <h1>Главная страница</h1>
          <img className="index-img" src="/img/maxresdefault.jpg" alt="" />
        </div>
      </MainContainer>
    </>
  )
}

export default index