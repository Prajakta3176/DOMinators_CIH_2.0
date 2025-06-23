

const MiniNavbar = () => {
    return(
        <div className="h-[50px] bg-white">
            <ul className="max-w-full h-full px-3 flex gap-12 justify-center items-center text-black font-semibold">
                <a href="report-issue"><li>Report Issue</li></a>
                <a href="track-complaint"><li>Track Complaint</li></a>
                <a href="my-complaints"><li>My Complaints</li></a>
                <a href="transparency-dashboard"><li>Transparency Dashboard</li></a>
            </ul>
        </div>
    );
}

export default MiniNavbar