import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Header from "@/components/header"
import Skill from "@/components/skills"
import ProfilePic from '../../public/images/webdev.jpg'
import JEAuto from '../../public/images/JEAuto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3, faMdb } from "@fortawesome/free-brands-svg-icons"
import ExperienceCard from '@/components/experiencecard'
import styles from "../styles/index.module.scss"
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <Layout page="home">
      <main className="flex flex-col justify-center">
        <section id="home" className="flex items-center flex-col h-fit mt-20">
          <div className="flex bg-secondary w-72 h-72 rounded-full items-center justify-center">
            <Image src={ProfilePic} alt="Picture of John A. Josephsen" className="w-64 h-64 rounded-full object-cover"></Image>
          </div>
          <div className="flex flex-col font-inter">
            <h1 className="my-6 mx-auto text-white text-4xl font-bold">John A. Josephsen</h1>
            <h2 className="my-6 mx-auto text-white text-3xl">An aspiring Full Stack Web Developer with a passion for creating new things</h2>
            <ul className="my-6 mx-auto w-1/2 flex flex-row items-center justify-around">
              <li>
                <a href="https://www.instagram.com/johnjosephsen/" target="_blank">
                  <FontAwesomeIcon className="text-secondary w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faInstagram}/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/john.josephsen.9" target="_blank">
                  <FontAwesomeIcon className="text-secondary w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faFacebook}/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/john-josephsen/" target="_blank">
                  <FontAwesomeIcon className="text-secondary w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faLinkedin}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/Jephsenn" target="_blank">
                <FontAwesomeIcon className="text-secondary w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faGithub}/>
                </a>
              </li>
            </ul>
            <button type="button" onClick={() => router.push('mailto:jjosephsenyt@gmail.com')} className="mt-6 mb-12 rounded-full bg-black text-white mx-auto w-1/6 p-3 ease-in-out duration-200 hover:bg-gray-800">Get In Touch</button>
          </div>
        </section>
        <section className="bg-secondary h-fit">
          <Header title="Skills"/>
          <ul className="my-12 mx-auto w-1/2 flex flex-row items-center justify-around flex-wrap">
              <Skill faIcon={faJava} name="Java"/>
              <Skill faIcon={faJs} name="JavaScript"/>
              <Skill faIcon={faNode} name="NodeJS"/>
              <Skill faIcon={faReact} name="React"/>
              <Skill faIcon={faTypo3} name="NextJS"/>
              <Skill faIcon={faHtml5} name="HTML5"/>
              <Skill faIcon={faCss3} name="CSS3"/>
              <Skill faIcon={faMdb} name="SQL"/>
            </ul>
        </section>
        <section className="h-fit">
         <Header title="Experience"/>
         <ul className="my-12 flex flex-row flex-wrap justify-center">
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
         </ul>
        </section>
        <section className="bg-secondary h-fit">
         <Header title="Education"/>
         <p className="mt-12 mb-4 mx-auto text-white text-2xl text-center">Recent Montclair State University Graduate</p>
         <p className="my-4 mx-auto text-white text-2xl text-center">Major: Computer Science</p>
         <p className="my-4 mx-auto text-white text-2xl text-center mb-12">Average GPA: 3.6</p>
        </section>
      </main>
    </Layout>
    
  )
}