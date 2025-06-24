import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

function CitizenOfficial(){
    return(
        <div className="pt-28 border-[#8AC8E9] border-1 h-[85vh] sm:h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] px-10 flex items-center justify-center">
            <div className="bg-white w-[80vh] h-[40vh] rounded-2xl p-5 flex flex-col items-center justify-around space-x-3">
            {/* Top Logo */}
                <div className="flex items-center flex-col justify-center space-x-3  " >
                    <div className='flex justify-center items-center'>
                        <Eye/>
                        <h1 className="text-2xl text-center font-semibold ml-2">CivicEye</h1>
                    </div>
                    <Link to="/">
                        <p className="text-xs  text-[#000000]">Citizen-Government Feedback Portal</p>
                    </Link>
                </div>

                {/* Buttons */}
            <div className="flex justify-center items-center gap-2.5">
                <a href="/sign-in" className="border border-[#8AC8E9] bg-[#2E728F] text-[#FFFFFF] px-6 py-2 6 rounded-md font-semibold w-[200px] text-center  hover:bg-[#003049] hover:text-[#FAFDFF] hover:border-[#8AC8E9] hover:border-2 ">Login as Citizen</a>
                
                <a href="/gov-sign-in" className="border border-[#8AC8E9] bg-[#2E728F] text-[#FFFFFF] px-6 py-2 6 rounded-md font-semibold w-[200px] text-center  hover:bg-[#003049] hover:text-[#FAFDFF] hover:border-[#8AC8E9] hover:border-2 ">Login as Officials</a>

            </div>
        </div>
        </div>
    );
}

export default CitizenOfficial;