import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";


export default function Home({products}) {
  return (
    <div className="bg-grey-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header component Sticks to the top */}
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner/>
        {/* Product Feed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}
export async function getServerSideProps(context){
 
  const response = await fetch('https://fakestoreapi.com/products')
  const jsonArray = await response.json()
  
  return {
      props : {
          products:  jsonArray
      }
  }
  
}
