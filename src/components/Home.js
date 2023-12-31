import React, { useEffect } from 'react'
import bg from '../assets/bg.png';
import top from '../assets/top.png';
import top_1 from '../assets/top_1.png';
import light_1 from '../assets/light_1.png';
import light_2 from '../assets/light_2.png';
import light_3 from '../assets/light_3.png';
import light_4 from '../assets/light_4.png';
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';
import icon_4 from '../assets/icon_4.png';
import icon_5 from '../assets/icon_5.png';
import icon_6 from '../assets/icon_6.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="font-days-one overflow-hidden text-white-100 bg-red">

            {/* top section */}

            <div className='fixed top-0 left-0 right-0 bottom-0 lg:block hidden'>
                <img src={bg} alt='' className='w-full h-full'></img>
            </div>

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <div className='lg:flex hidden items-center justify-between pt-32'>
                        <img src={light_1} alt='arrow' className='fixed left-16 shake'></img>

                        <img src={light_2} alt='arrow' className='fixed right-16 shake'></img>
                    </div>

                    <div className=''>
                        <div data-aos='zoom-in'>
                            <img src={top} alt='logo' className='flex mx-auto lg:w-4/12 w-7/12 pt-5'></img>

                            <img src={top_1} alt='logo' className='flex mx-auto absolute top-0 -z-10 lg:w-9/12 left-0 right-0 lg:-mt-24'>
                            </img>
                        </div>

                        <p data-aos='fade-up' className='lg:w-1/2 flex mx-auto text-center lg:py-16 py-6'>
                            In a unique Marvel multiverse, only "Pepe"s exist, with each one embodying various superheroes. This extraordinary realm showcases an array of Pepe-powered heroes, each possessing distinct abilities and strengths. Together, they form an astonishing league, defending their multiverse and beyond with their meme-inspired might.
                        </p>

                        <div className='text-center'>

                            <h1 data-aos='zoom-in' className='lg:text-6xl text-3xl font-bold text-yellow-100 font-chewy mb-8'>
                                TOKENOMICS
                            </h1>

                            <div className='space-y-8'>

                                <p data-aos='fade-down' className='text-2xl'><span className='font-chewy text-yellow-100'>Token Name:</span> Pepe Marvel Universe</p>

                                <div data-aos='fade-up' className='text-2xl'>
                                    <p className='font-chewy text-yellow-100'>Tax</p>
                                    <p>1/1</p>
                                </div>

                                <div data-aos='fade-up' className='text-2xl'>
                                    <p className='font-chewy text-yellow-100'>Max Wall</p>
                                    <p>3%</p>
                                </div>

                                <div data-aos='fade-up' className='text-2xl'>
                                    <p className='font-chewy text-yellow-100'>Supply</p>
                                    <p>420,690,000,000,000 $PMU</p>
                                </div>


                                <div data-aos='fade-up' className='flex items-center justify-center lg:gap-x-8 gap-x-4 flex-wrap'>
                                    <a href='/'>
                                        <img src={icon_1} alt='logo' className=''></img>
                                    </a>
                                    <a href='/'>
                                        <img src={icon_2} alt='logo' className=''></img>
                                    </a>
                                    <a href='https://t.me/pepemarveluniverse'>
                                        <img src={icon_3} alt='logo' className=''></img>
                                    </a>
                                    <a href='/'>
                                        <img src={icon_4} alt='logo' className=''></img>
                                    </a>
                                    <a href='/'>
                                        <img src={icon_5} alt='logo' className=''></img>
                                    </a>
                                    <a href='https://twitter.com/pepemarvel_uni'>
                                        <img src={icon_6} alt='logo' className=''></img>
                                    </a>
                                </div>

                                <div>
                                    <a href='mailto:pepemarveluniverse@gmail.com' className='mt-4'>
                                        Email: <span className='hover:underline hover:text-yellow-100'>pepemarveluniverse@gmail.com</span>
                                    </a>

                                    <p className="lg:pb-8 pb-2 font-thin">
                                        © {new Date().getFullYear()}. All rights reserved by Pepe Marvel Universe.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='lg:flex hidden items-center justify-between'>
                        <img src={light_3} alt='arrow' className='fixed left-16 bottom-2 shake'></img>

                        <img src={light_4} alt='arrow' className='fixed right-16 bottom-2 shake'></img>
                    </div>

                </div>
            </div>

        </div >
    )
}
