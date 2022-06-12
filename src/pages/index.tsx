import { Meta } from '@/layouts/Meta';
import React, { useState } from 'react';
import { Main } from '@/templates/Main';
import api from '@/utils/api';
import Alertify from '@/components/Alert';
// const CryptoJS =require("crypto-js");

import { ConnectWallet } from '../components/connectWallet';
const Index = () => {
  const [authKey,setAuthKey] = useState('');
  const [userAdd,setuserAdd] = useState('');
  // const router = useRouter();
    
    const userSubmit=async(event:any)=>{
      if(!userAdd){
        alert('please connect to metamask first')
        return;
      }
        event.preventDefault();
        const user={
          "name":`${event.target.name.value}`,
          "email":`${event.target.email.value}`,
          "address":userAdd,
        }
        try{
          const res=await api.post('/userRoutes/newUser',user);
          // console.log(res)
        }
        catch(err){
          alert("error in creating user");
          // <Alertify val={0} />;
          // console.log("User exists");
        }
    }

    const handleSubmit=async(event:any)=>{
        event.preventDefault();
        const developer={
          "username":`${event.target.name.value}`,
          "email":`${event.target.email.value}`,
          "password":`${event.target.password.value}`
        }
        try{
          const res=await api.post('/developerRoutes/register',developer);
          if(res){
            // console.log(res.data.authKey);
            setAuthKey(res.data.authKey);
          }
        }
        catch(err){
          console.log(err);
        }
    }






  return (
    <Main
      meta={
        <Meta
          title="Blockchain authentication using metamask"
          description="Authentication using blockchain"
        />
      }
    >
      {/* <div style={{display:'flex',position:'absolute', top:'0'}}>
        <Alertify val={0}/>
      </div> */}
      <h1 className="text-2xl font-bold">
        Blockchain authentication using metamask
      </h1>
      <p>
        Developing an API endpoint that allows you to LOGIN using your
        Blockchain Account across multiple apps.
      </p>
      <h2 className="text-lg font-semibold">
        Sign in as a User or as a developer to get your Auth Key:
      </h2>
      <br />
      <div className=" flex items-start">
        <div className="m-5 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
          <form className="space-y-6" action="#" onSubmit={userSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform As a User!
            </h5>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {' '}
                Your name{' '}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="Your full name"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {' '}
                Your email{' '}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="name@company.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                required
              ></input>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    required
                  ></input>
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
          <ConnectWallet setter={setuserAdd}/>
          <p>{userAdd}</p>
        </div>
        <br />
        {/* <h2 className="text-lg font-semibold">Sign in as a Developer:</h2> */}
        <br />
        <div className="m-5 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform As a Developer!
            </h5>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {' '}
                Your name{' '}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="Your full name"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {' '}
                Your email{' '}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="name@company.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                required
              ></input>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    required
                  ></input>
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click here to get your Auth Key!
            </button>
            {authKey && (
              <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {' '}
                The following is your AuthKey, Please copy it and keep it safe, you will not be seeing this again!{' '}
              </label>
              <input
                type="text"
                name="auth"
                id="auth"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                value={authKey}
                readOnly
              ></input>
            </div>
            )}
          </form>
        </div>
      </div>
    </Main>
  );
};

export default Index;

