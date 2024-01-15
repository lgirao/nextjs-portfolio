import BackgroundImage from "../../../public/shapelined-texture-background.jpg";

const backgroundImage = {
    heroBackground: {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, #a7a6a7 100%), url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}

const Hero = () => {
    return(
        <section className="w-full px-2 min-h-96 relative" style={backgroundImage.heroBackground}>
            <div className="text-center absolute inset-x-0 top-2/4 translate-x-0 -translate-y-1/2">
                <h1 className="text-5xl uppercase font-bold">Hi, I&apos;m <span className="text-violet-800">Lesley</span> Girao</h1>
                <p className="text-2xl max-w-lg mx-auto mt-12 mb-0 px-4 md:px-0">A passionate Web Developer committed to building exceptional digital experiences.</p>
            </div>
        </section>
    )
}

export default Hero;