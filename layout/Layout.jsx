import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Layout = ({children,pagina}) => {
  return (
    <>
        <Head>
            <title>{`Taqueria - ${pagina}`}</title>
            <meta name="description" content="taqueria las vecinas"/>
        </Head>
        <div className=" md:flex">
            <aside className="   md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Sidebar/>
            </aside>
            <main className=" md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout