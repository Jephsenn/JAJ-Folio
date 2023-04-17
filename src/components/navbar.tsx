import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import {isMobile} from 'react-device-detect';

type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const nav = document.getElementById("nav");
        function checkScroll() {
        if (window.scrollY > 0) {
            nav?.classList.add("bg-primary");
        } else if (window.scrollY === 0) {
            if(document.querySelector('.NAVIGATION-MOBILE-OPEN')?.classList.contains('invisible')) {
                nav?.classList.remove("bg-primary");
            }
            if(isNavOpen){
                nav?.children[0].children[0].classList.remove("hover:text-black");
                nav?.children[1].children[0].children[0].classList.remove("hover:text-black");
                nav?.children[1].children[1].children[0].classList.remove("hover:text-black");
                nav?.children[1].children[2].classList.remove("bg-black");
                nav?.children[1].children[2].classList.remove("text-white");
                nav?.children[0].children[0].classList.add("hover:text-secondary");
                nav?.children[1].children[0].children[0].classList.add("hover:text-secondary");
                nav?.children[1].children[1].children[0].classList.add("hover:text-secondary");
                nav?.children[1].children[2].classList.add("bg-white");
                nav?.children[1].children[2].classList.add("text-black");
            }
        }
        }
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
      }, []);

    return (
        <nav id="nav" className="h-16 w-full fixed top-0 z-20 ease-in-out duration-300">
            <div className="relative h-full w-full flex items-center justify-between md:px-12 text-3xl px-4">
                <span className="text-white font-bold">
                    <a id="jaj" href="#top" className="hover:text-secondary">JAJ</a>
                </span>
            <ul className="items-center text-white flex-direction-col text-lg hidden lg:flex">
                <li className="mx-2 md:mx-6">
                    <a href="https://github.com/Jephsenn" target="_blank" className="hover:cursor-pointer hover:text-secondary">GitHub</a>
                </li>
                <li className="mx-2 md:mx-6">
                    <a href="/resume/JAJResume.pdf" target="_blank" className="hover:cursor-pointer hover:text-secondary">Resume</a>
                </li>
                <li className="text-black ml-2 md:mx-6 bg-white px-4 py-1 rounded-full ease-in-out duration-200 hover:bg-gray-800 hover:text-white hover:cursor-pointer">
                  <button type="button" onClick={() => router.push('mailto:jjosephsenyt@gmail.com')}>Contact</button>
                </li>
            </ul>
            <div className="flex items-center justify-between border-gray-400 py-8 h-full lg:hidden">
            <nav className="w-full">
                <section className="MOBILE-MENU flex lg:hidden">
                <div className='group HAMBURGER-ICON space-y-2 hover:cursor-pointer' onClick={() => {
                    setIsNavOpen(true);
                    document.querySelector('#nav')?.classList.add('bg-primary');
                    document.querySelector('.HAMBURGER-ICON')?.classList.toggle('hidden')
                    document.querySelector('.NAVIGATION-CLOSE')?.classList.toggle('hidden')
                    document.querySelector('.NAVIGATION-MOBILE-OPEN')?.classList.toggle('invisible')
                    document.querySelector('.NAVIGATION-MOBILE-OPEN')?.classList.remove('-translate-y-[150%]')
                }}>
                    <span className="block h-0.5 w-8 bg-white group-hover:bg-secondary"></span>
                    <span className="block h-0.5 w-8 bg-white group-hover:bg-secondary"></span>
                    <span className="block h-0.5 w-8 bg-white group-hover:bg-secondary"></span>
                </div>
                <div className='NAVIGATION-CLOSE hidden z-10 space-y-2' onClick={() =>  {
                    setIsNavOpen(false)
                    if(document.querySelector('#nav')?.classList.contains('bg-primary') && window.scrollY === 0){
                        document.querySelector('#nav')?.classList.remove('bg-primary');
                    }    
                    document.querySelector('.HAMBURGER-ICON')?.classList.toggle('hidden')
                    document.querySelector('.NAVIGATION-CLOSE')?.classList.toggle('hidden')
                    document.querySelector('.NAVIGATION-MOBILE-OPEN')?.classList.toggle('invisible')
                    document.querySelector('.NAVIGATION-MOBILE-OPEN')?.classList.toggle('-translate-y-[150%]')
                    }}>
                    <svg
                        className="h-8 w-8 text-white hover:text-secondary hover:cursor-pointer"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className={'absolute w-full top-full left-0 bg-primary text-white invisible NAVIGATION-MOBILE-OPEN flex flex-col text-center justify-between items-center transition-all duration-300 ease-in-out -translate-y-[150%] text-lg'}>
                    <li className="flex justify-center items-center py-4 h-full w-full border-b border-t border-gray-400">
                        <a href="https://github.com/Jephsenn" target="_blank" className="hover:cursor-pointer hover:text-secondary">GitHub</a>
                    </li>
                    <li className="flex justify-center items-center py-4 h-full w-full border-b border-gray-400">
                        <a href="/resume/JAJResume.pdf" target="_blank" className="hover:cursor-pointer hover:text-secondary">Resume</a>
                    </li>
                    <li className="flex justify-center items-center py-4 h-full w-full border-b border-gray-400">
                        <a href="mailto:jjosephsenyt@gmail.com" target="_blank" className="hover:cursor-pointer hover:text-secondary">Contact</a>
                    </li>
                </ul>
            </section>
            </nav>
            </div>
            </div>
        </nav>
        )
    }