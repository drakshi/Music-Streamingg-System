import React from 'react';
import {getProviders , signIn} from 'next-auth/react';

const Login = ({providers}) => {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>  
    
          <img className = 'h-44 w-44 mb-5' src='http://icons.iconarchive.com/icons/cornmanthe3rd/squareplex/512/Media-play-music-icon.png'/>    
          <div class="w-full max-w-xs">
  <form class="bg-black shadow-md rounded ">
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Client Id
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Client Secret
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    </div>
    
  </form>
</div>

          {Object.values(providers).map((provider) => (
          <div>
            <button className='bg-[#FD6A17] text-white p-3 rounded-full items-center' onClick={()=>{signIn(provider.id, {callbackUrl : '/'})}}>
                 Login with Musify
            </button>
          </div>
      ))}
      
    </div>
  )
}

export default Login;

export async function getServerSideProps(){
  const providers= await getProviders();
  return {
    props: {
        providers
    }
  }
}
