

const MiniNavbar = () => {
    return(
        <div className="h-[50px] bg-white">
            <ul className="max-w-full h-full px-3 flex gap-12 justify-center items-center text-black font-semibold">
                <a href="#report-issue"><li>Report Issue</li></a>
                <a href="track-complaint"><li>Track Complaint</li></a>
          <a href="/issue-listing" className="hover:text-yellow-300">Complaints Received</a>
                <a href="/statistic-dashboard"><li>Transparency Dashboard</li></a>
            </ul>
        </div>
    );
}

export default MiniNavbar