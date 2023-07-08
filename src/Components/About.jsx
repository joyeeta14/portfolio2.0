import { useLottie } from "lottie-react";
import about from "../../public/about.json";


const About = () => {

    const options = {
        animationData: about,
        loop: true
      };
      const { View } = useLottie(options);

    return (
        <div id="About" className="grid grid-cols-1 lg:grid-cols-2 pt-28">
         <div className="w-50">
            {View}
            </div>
        <div className="flex flex-col ms-24  justify-center items-center">
            <h1 className="text-center text-violet-500 font-bold text-5xl">
                About Me
            </h1>
            <p className="mt-8 font-medium text-xl">
            I am a passionate MERN Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior MERN Developer, I have a strong grasp of Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies. By continuously expanding my skill set, I ensure I can deliver innovative solutions.
            </p>
            </div>
           
    </div>
    )
}




//animate__pulse
//animate__backInDown
export default About;