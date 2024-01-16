import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="py-16 bg-gray-100 w-full">
            <div className="text-center mb-12">
                <h2 id="projects" className="text-3xl font-bold mb-20 relative heading-after">Projects</h2>
                {/* <p className="text-lg max-w-2xl mx-auto my-0 px-4">Here you will find a showcase of my best projects, personal and professional, using a variety of technology.</p> */}
            </div>
            <div className="px-4 flex md:block">
                <div className="block md:grid grid-cols-2 gap-x-4 gap-y-12 max-w-screen-lg mx-auto my-0">
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-xs mb-12 md:mb-0">
                            <Link
                              href={"https://lmsonline.com/"}
                              target="_blank"
                            >
                              <Image
                                src="/lmsonline.png"
                                width={600}
                                height={400}
                                className='border shadow-xl mb-2'
                                alt="Screenshot of lmsonline.com"
                              />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">LMSonline.com</h3>
                                <p className="text-sm mb-2">Professional</p>
                                <p className="text-neutral-600">WordPress website built using HTML, CSS, PHP, JavaScript, and JQuery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center max-w-xs mb-12 md:mb-0">
                            <Link
                              href={"https://lmstechonline.com/"}
                              target="_blank"
                            >
                              <Image
                                src="/lmstechonline.png"
                                width={600}
                                height={400}
                                className='border shadow-xl mb-2'
                                alt="Screenshot of lmsonline.com"
                              />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">LMStechonline.com</h3>
                                <p className="text-sm mb-2">Professional</p>
                                <p className="text-neutral-600">WordPress website built using HTML, CSS, PHP, JavaScript, and JQuery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-xs mb-12 md:mb-0">
                            <Link
                              href={"https://waylandballoonfest.com/"}
                              target="_blank"
                            >
                              <Image
                                src="/wayland-balloonfest.png"
                                width={600}
                                height={400}
                                className='border shadow-xl mb-2'
                                alt="Screenshot of lmstechonline.com"
                              />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">waylandballoonfest.com</h3>
                                <p className="text-sm mb-2">Personal</p>
                                <p className="text-neutral-600">Event website built using NodeJS. Deployed with AWS Lightsail.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-xs mb-12 md:mb-0">
                            <Link
                              href={"/"}
                              target="_blank"
                            >
                              <Image
                                src="/portfolio-site.png"
                                width={600}
                                height={400}
                                className='border shadow-xl mb-2'
                                alt="Screenshot of Lesley Girao portfolio site"
                              />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Portfolio Site</h3>
                                <p className="text-sm mb-2">Personal</p>
                                <p className="text-neutral-600">Portfolio website built using NextJS and NodeMailer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;