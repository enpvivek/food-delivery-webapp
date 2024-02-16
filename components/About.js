import technology from "../assets/images/technology.png";
import cloudkitchen from "../assets/images/cloudkitchen.png";
import business from "../assets/images/business.png";
import { Contact } from "./Contact";

const About = () => {
    return (
        <div className="flex w-full h-auto flex-col">

            {/* Hero Banner Section */}
            <div className="bg-cover bg-center bg-aboutbanner flex-col flex w-full h-[500px]  p-5 lg:px-32">
                <div className="w-full flex flex-col text-3xl font-bold my-5 text-white drop-shadow-md py-5 px-32">
                    <h1 className="font-extrabold text-4xl my-4">Discover Foodie</h1>
                    <h1>We are best food delivery App</h1>
                </div>
            </div>

            {/* Middle Text with some icons Section */}
            <div className="flex-col flex w-full h-auto  gap-4 p-5 lg:px-32">
                <div className="w-full flex flex-col text-xl my-5 text-gray-700 py-5 justify-center">
                    <h1 className=" text-center">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    </h1>

                    <h1 className="text-center">The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.</h1>

                    <h1 className="font-bold text-3xl my-4 text-center py-8">Where Do You Belong?</h1>
                    <div className="flex flex-row justify-evenly w-full h-full font-extralight ">                        
                        <div className="flex justify-center w-auto h-auto flex-col gap-4">
                            <img src={cloudkitchen} alt="Technology" />
                            <h1 className=" text-center font-bold text-2xl text-gray-500">  K I T C H E N</h1>
                            <button className="w-auto h-auto px-2 py-1 border-primary border-[1px] bg-white text-primary rounded-md hover:bg-primary hover:text-white">Explore</button>
                        </div>
                        <div className="flex justify-center w-auto h-auto flex-col gap-4">
                            <img src={technology} alt="Technology" />
                            <h1 className=" text-center font-bold text-2xl text-gray-500">  T E C H N O L O G Y</h1>
                            <button className="w-auto h-auto px-2 py-1 border-primary border-[1px] bg-white text-primary rounded-md hover:bg-primary hover:text-white">Explore</button>
                        </div>
                        <div className="flex justify-center w-auto h-auto flex-col gap-4">
                            <img src={business} alt="Technology" />
                            <h1 className="text-center font-bold text-2xl text-gray-500"> B U S I N E S S</h1>
                            <button className="w-auto h-auto px-2 py-1 border-primary border-[1px] bg-white text-primary rounded-md hover:bg-primary hover:text-white">Explore</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Page */}
            <Contact />

        </div>
        
    )
};

export default About;