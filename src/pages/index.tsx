import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Header from "@/components/header"
import Skill from "@/components/skills"
import ProfilePic from '../../public/images/webdev.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3, faMdb } from "@fortawesome/free-brands-svg-icons"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout page="home">
      <main className="flex flex-col justify-center">
        <section className="flex items-center flex-col h-screen">
          <div className="flex bg-secondary w-72 h-72 rounded-full items-center justify-center">
            <Image src={ProfilePic} alt="Picture of John A. Josephsen" className="w-64 h-64 rounded-full object-cover"></Image>
          </div>
          <div className="flex flex-col font-inter">
            <h1 className="my-6 mx-auto text-white text-4xl font-bold">John A. Josephsen</h1>
            <h2 className="my-6 mx-auto text-white text-3xl">An aspiring Full Stack Web Developer with a passion for creating new things</h2>
            <ul className="my-6 mx-auto w-1/2 flex flex-row items-center justify-around">
              <li>
                <FontAwesomeIcon className="text-secondary w-12" icon={faInstagram}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-12" icon={faFacebook}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-12" icon={faLinkedin}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-12" icon={faGithub}/>
              </li>
            </ul>
            <button className="my-6 rounded-full bg-black text-white mx-auto w-1/6 p-3">Get In Touch</button>
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
        <section className="h-screen">
         <Header title="Experience"/>
        </section>
      </main>
      
    </Layout>
    
  )
}
