import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-16">
            <div className="md:flex text-center max-w-5xl mx-auto my-0 px-5 justify-between text-white pb-8">
                <div className="mb-5 md:mb-0 md:text-left">
                    <h2 className="text-xl uppercase font-bold mb-5">Lesley Girao</h2>
                    <p className="text-base mx-auto mb-0 w-96">A passionate Web Developer committed to building exceptional digital experiences.</p>
                </div>
                <div>
                    <h2 className="text-xl uppercase font-bold mb-5">Social</h2>
                    <div className="flex justify-center">
                        <Link
                          href={"https://www.linkedin.com/in/lesley-girao/"}
                          target="_blank"
                          className="mr-5 text-2xl"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                          href={"https://github.com/lgirao"}
                          target="_blank"
                          className="text-2xl"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t-2 py-8 max-w-5xl mx-auto my-0 px-5 text-white text-sm text-center">
                © Copyright {year}. Made by LESLEY GIRAO.
                <br></br>
                <span className="text-xs">Inspired by <a href="https://www.rammaheshwari.com/" target="_blank">RAM MAHESHWARI</a>.</span>
            </div>
        </footer>
    )
}

export default Footer;