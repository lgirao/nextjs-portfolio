import Image from "next/image";

const Projects = () => {
    return (
        <section className="py-16 bg-slate-100 w-full">
            <div className="text-center mb-12">
                <h2 id="projects" className="text-3xl font-bold mb-12 relative heading-after">Projects</h2>
                <p className="text-lg max-w-2xl mx-auto my-0 px-4">Here you will find a showcase of my best projects, personal and professional, using a variety of technology.</p>
            </div>
            <div className="px-4 flex md:block">
                <div className="block md:grid grid-cols-4 gap-x-4 max-w-screen-xl mx-auto my-0">
                    <div className="flex flex-col max-w-xs mb-6 md:mb-0">
                        <Image
                          src="/lmsonline.png"
                          width={600}
                          height={400}
                          className='border shadow-xl mb-2'
                          alt="Screenshot of lmsonline.com"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold">LMSonline.com</h3>
                            <p className="text-sm mb-2">Professional</p>
                            <p className="text-neutral-600">WordPress website built using HTML, CSS, PHP, JavaScript, and JQuery.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center max-w-xs mb-6 md:mb-0">
                        <Image
                          src="/lmstechonline.png"
                          width={600}
                          height={400}
                          className='border shadow-xl mb-2'
                          alt="Screenshot of lmsonline.com"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold">LMStechonline.com</h3>
                            <p className="text-sm mb-2">Professional</p>
                            <p className="text-neutral-600">WordPress website built using HTML, CSS, PHP, JavaScript, and JQuery.</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs mb-6 md:mb-0">
                        <Image
                          src="/wayland-balloonfest.png"
                          width={600}
                          height={400}
                          className='border shadow-xl mb-2'
                          alt="Screenshot of lmstechonline.com"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold">waylandballoonfest.com</h3>
                            <p className="text-sm mb-2">Personal</p>
                            <p className="text-neutral-600">Event website built using NodeJS. Deployed with AWS Lightsail.</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs mb-6 md:mb-0">
                        <Image
                          src="/portfolio-site.png"
                          width={600}
                          height={400}
                          className='border shadow-xl mb-2'
                          alt="Screenshot of Lesley Girao portfolio site"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold">Portfolio Site</h3>
                            <p className="text-sm mb-2">Personal</p>
                            <p className="text-neutral-600">Portfolio website built using NextJS and NodeMailer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;