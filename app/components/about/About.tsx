const skills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "NodeJS"},
    {skill: "React"},
    {skill: "Git"},
    {skill: "SQL"},
    {skill: "WordPress"},
    {skill: "AWS Console"},
    {skill: "Cloudflare"},
    {skill: "Google Search"},
    {skill: "Google Analytics"},
]

const About = () => {
    return (
        <section className="py-16 mx-4">
            <div className="text-center mb-12">
                <h2 id="about" className="text-3xl font-bold mb-20 relative heading-after">About Me</h2>
                {/* <p className="text-lg max-w-2xl mx-auto">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p> */}
            </div>
            <div className="block md:grid grid-cols-2 gap-x-8 max-w-screen-xl">
                <div className="px-4 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-6 text-center md:text-left">Get to know me!</h3>
                    <p className="text-base text-neutral-500">
                        My love for web development started after completing my first few courses on Codecademy. Since then I have completed several courses including a Web Developer Bootcamp on Udemy and dedicated 2+ years in a technical position at LMS, Inc. as a Web Developer/Jr. Software Engineer.
                        <br></br><br></br>
                        I am interested in all things web development and am excited to grow and learn more in this field.
                        {/* As a passionate Web Developer, my expertise lies in leveraging cutting-edge technologies to deliver high-quality, well-documented, and reusable code. I specialize in optimizing and monitoring performance to ensure peak operation of web applications. My commitment extends to ensuring cross-browser compatibility, facilitating seamless user interaction across various platforms. With a robust foundation in HTML, CSS, JavaScript, and other web technologies, I consistently develop user-friendly web applications that make a lasting impact.                        
                        Troubleshooting and debugging are second nature to me, reflecting my excellent problem-solving skills. I stay ahead of the curve by remaining updated with the latest web technologies and trends, ensuring the solutions I deliver are not only current but also future-proof. Whether working independently or collaboratively, I approach every project with a detail-oriented mindset. Strong communication skills further facilitate seamless collaboration with teams and stakeholders in our fast-paced digital landscape. */}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6 text-center md:text-left">My skills</h3>
                    <div className="flex flex-wrap">
                        {skills.map((skill, i) => (
                            <div 
                                key={i}
                                className="bg-violet-100 rounded py-4 px-8 font-semibold text-sm md:text-base text-neutral-500 mr-6 mb-6"
                            >
                                {skill.skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

