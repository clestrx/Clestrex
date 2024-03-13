import React from 'react'
import Layout from '../src/layouts/Layout'

const film_industry = () => {
  return (
    <>
      <Layout>
        <div className="max-w-[1024px] mx-auto px-3 mt-20">
          <div className='text-[50px] explore_your'>Explore Your Fantacies</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
            {[1, 2, 3, 4].map(() => (
              <>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1'>
                  <div className='border border-black rounded overflow-hidden custom_max_width'>
                    <div className='img_class'>
                      <img src="/assets/images/22e53e_422c96a46cfd4873b36279bc94bf5bd4~mv2.webp" height="205px" width="205px" alt="" />
                    </div>
                    <div className='p-3'>
                      <div className='py-1'>I&apos;m a product</div>
                      <div>₹85.00</div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1'>
                  <div className='border border-black rounded overflow-hidden custom_max_width'>
                    <div className='img_class'>
                      <img src="/assets/images/22e53e_facaef011f164e1fb98efad96d8bc5ca~mv2.webp" height="205px" width="205px" alt="" />
                    </div>
                    <div className='p-3'>
                      <div className='py-1'>I&apos;m a product</div>
                      <div>₹20.00</div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1'>
                  <div className='border border-black rounded overflow-hidden custom_max_width'>
                    <div className='img_class'>
                      <img src="/assets/images/22e53e_76457cb2289949808e94bb1627b485f1~mv2.webp" height="205px" width="205px" alt="" />
                    </div>
                    <div className='p-3'>
                      <div className='py-1'>I&apos;m a product</div>
                      <div>₹10.00</div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1'>
                  <div className='border border-black rounded overflow-hidden custom_max_width'>
                    <div className='img_class'>
                      <img src="/assets/images/22e53e_dc9ea8282a4944edab558992753a6d72~mv2.webp" height="205px" width="205px" alt="" />
                    </div>
                    <div className='p-3'>
                      <div className='py-1'>I&apos;m a product</div>
                      <div>₹25.00</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

        </div>
      </Layout>
    </>
  )
}

export default film_industry