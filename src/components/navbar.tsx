import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    const router = useRouter();

    useEffect(() => {
        const nav = document.getElementById("nav");
        function checkScroll() {
        if (window.scrollY > 0) {
            nav?.classList.add("bg-primary");
            nav?.children[0].children[0].classList.remove("hover:text-secondary");
            nav?.children[1].children[0].children[0].classList.remove("hover:text-secondary");
            nav?.children[1].children[1].children[0].classList.remove("hover:text-secondary");
            nav?.children[1].children[2].classList.remove("bg-white");
            nav?.children[1].children[2].classList.remove("text-black");
            nav?.children[0].children[0].classList.add("hover:text-black");
            nav?.children[1].children[0].children[0].classList.add("hover:text-black");
            nav?.children[1].children[1].children[0].classList.add("hover:text-black");
            nav?.children[1].children[2].classList.add("bg-black");
            nav?.children[1].children[2].classList.add("text-white");
        } else if (window.scrollY === 0) {
            nav?.classList.remove("bg-primary");
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
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
      }, []);

    return (
        <nav id="nav" className="h-16 w-full flex items-center justify-between md:px-12 text-3xl fixed top-0 z-[999] ease-in-out duration-300 px-4">
            <span className="text-white">
                <a id="jaj" href="#top" className="hover:text-secondary">JAJ</a>
            </span>
            <ul className="items-center text-white flex flex-direction-col text-lg">
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
        </nav>
        )
    }