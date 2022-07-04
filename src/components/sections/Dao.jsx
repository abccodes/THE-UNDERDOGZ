import React from 'react';
import Nftpuller from '../../n2dpuller/nftpuller.js';

const Dao = () => {
  return (
    <div name='contact' className='w-full h-screen css-selector flex justify-center items-center p-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                THE UNDERDOGZ DAO 
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Vote - Propose - Earn</p>
              </div>
              <div>
                <p>1 UNDERDOGZ NFT = 1 Vote | 5 UNDERDOGZ NFTs = Proposal Power. Head over to Snapshot Labs to participate, and claim your DIVIDENS when the time comes!</p>  
              </div>
            </div>
        </div>
        <Nftpuller />
    </div>  
  );
};

export default Dao;
