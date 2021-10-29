import Head from "next/head";
import clientPromise from './api/mongo.js'

export default function Home({  }) {
  return (
    
    <div class=" pt-56 p-20	">
      <Head>
      
    </Head>
  
         
      <div class="bg-white flex items-center justify-self-center rounded-full shadow-xl">
        <input
          class="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />

        <div class="p-4">
          <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            icon
          </button>
        </div>
      </div>
    </div>
    
  );
}

      