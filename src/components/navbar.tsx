import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    const router = useRouter();

    useEffect(() => {
        const nav = document.querySelector("nav");
        function checkScroll() {
        if (window.scrollY > 0) {
            nav?.classList.add("bg-secondary");
            nav?.children[0].children[0].classList.add("hover:text-black")
            nav?.children[1].children[0].children[0].classList.add("hover:text-black")
            nav?.children[1].children[1].children[0].classList.add("hover:text-black")
        }
        if (window.scrollY === 0) {
            nav?.classList.remove("bg-secondary");
            nav?.children[0].children[0].classList.remove("hover:text-black")
            nav?.children[1].children[0].children[0].classList.remove("hover:text-black")
            nav?.children[1].children[1].children[0].classList.remove("hover:text-black")
        }
        }
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
      }, []);

    return (
        <nav className="h-16 w-full flex items-center justify-between px-12 text-3xl fixed top-0 z-[999] ease-in-out duration-300">
            <span className="text-white">
                <a href="#top" className="hover:text-secondary">JAJ</a>
            </span>
            <ul className="items-center text-white flex flex-direction-col text-lg">
                <li className="mx-6">
                    <a href="https://github.com/Jephsenn" target="_blank" className="hover:cursor-pointer hover:text-secondary">GitHub</a>
                </li>
                <li className="mx-6">
                    <a href="/resume/JAJResume.pdf" target="_blank" className="hover:cursor-pointer hover:text-secondary">Resume</a>
                </li>
                <li className="text-white mx-6 bg-black px-4 py-1 rounded-lg ease-in-out duration-200 hover:bg-gray-800">
                  <button type="button" onClick={() => router.push('mailto:jjosephsenyt@gmail.com')} className="rounded-full ease-in-out duration-200 hover:bg-gray-800">Contact</button>
                </li>
            </ul>
        </nav>
        )
    }