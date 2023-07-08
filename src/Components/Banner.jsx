import { useLottie } from "lottie-react";
import lotify from "../../public/lottifie.json";
import resume from "../../src/pdf/MyResume.pdf"


const Banner = () => {

    const options = {
        animationData: lotify,
        loop: true
      };
      const { View } = useLottie(options);

    return (
        <div id="Home" className="grid grid-cols-1 lg:grid-cols-2 pt-28">
        <div className="flex flex-col ms-24  justify-center items-center">
            <h1 className="font-bold uppercase text-5xl">
                Junior <span className="text-violet-500">Frontend Web Developer</span>
            </h1>
            <p className="mt-8 font-medium text-xl">
            Hi, I'm Joyeeta Sarkar Puja. A passionate MERN Stack Web Developer from Gazipur, Bangladesh
            </p>
            <button className="btn btn-primary me-96 mt-5">
                <a href={resume} download="MyResume"> DOWNLOAD RESUME</a>
            </button>
            </div>
            <div >
            {View}
            </div>
    </div>
    )
}




//animate__pulse
//animate__backInDown
export default Banner;