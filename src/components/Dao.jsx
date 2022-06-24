import React from 'react';

const Dao = () => {
  return (
    <div name='about' className='w-full h-screen css-selector text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias laudantium error tempora veritatis nam fugiat laborum vitae quidem magni praesentium voluptatum animi quaerat quas velit illum minus. Aut, placeat.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda sed eligendi veniam porro, nisi sunt pariatur voluptatibus explicabo exercitationem rem commodi iure expedita aliquam hic. Quod cumque aliquam eos!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dao;
