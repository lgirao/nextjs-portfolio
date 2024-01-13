import BackgroundImage from "../../../public/shapelined-texture-background.jpg";

const backgroundImage = {
    heroBackground: {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, #767676 100%), url(${BackgroundImage.src})`,
        //backgroundImage: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}

const Hero = () => {
    return(
        <section className="w-full px-2 min-h-96 relative" style={backgroundImage.heroBackground}>
            <div className="text-center absolute inset-x-0 top-2/4 translate-x-0 -translate-y-1/2">
                <h1 className="text-5xl uppercase font-bold">Hi, I&apos;m Lesley Girao</h1>
                <p className="text-2xl max-w-lg mx-auto mt-12 mb-0">A passionate Web Developer committed to building exceptional digital experiences.</p>
                {/* <p>I aim to deliver high-quality, well-documented, and reusable code to every web application. I&apos;m always learning something new to stay current with the latest web technologies.</p> */}
            </div>
        </section>
    )
}

export default Hero;