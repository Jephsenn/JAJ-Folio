type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    return (
        <div className="h-16 flex items-center justify-between px-12 text-3xl">
            <span className="text-white">JAJ</span>
            <ul className="items-center text-white flex flex-direction-col text-lg">
                <li className="mx-6">GitHub</li>
                <li className="mx-6">Resume</li>
                <li className="text-white mx-6 bg-black px-4 py-1 rounded-lg">Contact</li>
            </ul>
        </div>
        )
    }