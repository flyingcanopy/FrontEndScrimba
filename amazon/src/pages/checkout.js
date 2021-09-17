import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { session, useSession } from "next-auth/client";
function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal)
  const [session] = useSession();
  console.log(items.length);
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length > 0 ? (
                <div>
                  {items.map((item, i) => {
                    console.log(i);
                    return <CheckoutProduct key={item.id} product={item} />;
                  })}
                </div>
              ) : null}
            </h1>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <div>
              <h2 className='whitespace-nowrap'>
                SubTotal ({items.length} items):{" "}
                <span className='font-bold'>
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>
              
              <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                {!session ? 'Sign in to checkout ' : 'Proceed to checkout'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
