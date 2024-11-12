// import "../index.css"
const MobileMenu= ()=>{
    return(
        <div className="w-full absolute px-4 py-6 left-0 top-[3rem] bg-white rounded-b-md lg:hidden">
            <h1 className=" w-full text-base text-center mb-4 text-getstarted">Mentorship</h1>
            <p className="text-base  text-getstarted text-center">Nedd AI job application and support</p>
            <button className="bg-getstarted hover:bg-blue-800 w-full rounded-full py-3 mt-3 text-white">
                <a href="mentor-techies.com">Get Started</a>
            </button>
        </div>
    )
}
export default MobileMenu