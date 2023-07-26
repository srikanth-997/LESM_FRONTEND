import React from "react";


import InterViewStatus from "../Images/InterViewStatus.svg"

import { FiDownload } from 'react-icons/fi';

import "./TaggedJobs.css";




export default function TaggedJob() {

    const cardDataList = [

        {

            candidateName: "Srikanth",

            relevantExp: "3",

            totalExp: "4",

            currentCTC: "300000",

            expectedCTC: "600000",

        },

        // Add more card data objects as needed

        {

            candidateName: "Srikanth",

            relevantExp: "3",

            totalExp: "4",

            currentCTC: "300000",

            expectedCTC: "600000",

        },

        {

            candidateName: "Srikanth",

            relevantExp: "3",

            totalExp: "4",

            currentCTC: "300000",

            expectedCTC: "600000",

        },

        {

            candidateName: "Srikanth",

            relevantExp: "3",

            totalExp: "4",

            currentCTC: "300000",

            expectedCTC: "600000",

        },

        {

            candidateName: "Srikanth",

            relevantExp: "3",

            totalExp: "4",

            currentCTC: "300000",

            expectedCTC: "600000",

        },

    ];

    const downloadResume = () => {

        const resumeUrl = '';

        window.open(resumeUrl, '_blank');

    };

    return (

        <div>
            <nav >
                <h1>Navabar</h1>
            </nav>
            <div id="profile">

                <h4>View Profiles</h4>

            </div>

            <div className="container">
                <main>

                    <div className="mRow1">

                        <label>Manager Approval</label>

                        <label>Candidate Resume</label>

                    </div>

                    <div className="mRow2">

                        <h4>Pending</h4>

                        <button id="dLoadBtn" onClick={downloadResume}>

                            <FiDownload /> Download Resume

                        </button>

                    </div>
                    <div className="mRow3">
                        <label>Approve Date</label>
                        <h4>---</h4>
                    </div>
                    
                    <div className="mRow4">
                        <label>Candidate Id</label>
                        <label>Sent Date</label>
                    </div>
                    <div className="mRow5">
                        <h4>EMP_040</h4>
                        <h4>27, Apr,2023 : 02:19 PM</h4>
                    </div>
                    <div className="divider1"></div>
                    <div className="mRow6">
                        <label>Candidate Name</label>
                        <h4>Srikanth</h4>

                    </div>
                    <div className="mRow7">
                        <label>Email Id</label>
                        <label>Mobile No</label>
                    </div>
                    <div className="mRow8">
                        <h4>Srikanth@gmail.com</h4>
                        <h4>+91-8374689292</h4>
                    </div>
                    <div className="divider1"></div>
                    <div className="mRow9">
                        <label>Relevant Exp</label>
                        <label>Total Exp</label>
                    </div>
                    <div className="mRow10">
                    <h4>5</h4>
                    <h4>6</h4>
                    </div>
                    <div className="divider1"></div>
                    <div className="mRow11">
                        <label>Current CTC</label>
                        <label>Expected CTC</label>
                    </div>
                    <div className="mRow12">
                    <h4>500000</h4>
                    <h4>600000</h4>
                    </div>
                    <div className="mRow13">
                        <label>Current Org</label>
                        <h4>Wipro</h4>
                    </div>
                    <div className="mRow14">
                        <label>Sent By</label>
                       <button className="button " id="btnA">Approve</button>
                    </div>
                    <div className="mRow15">
                      <label>Srikanth</label>
                       <button className="button " id="btnR">Reject</button>
                    </div>



                </main>




                {/* Side Bar Code */}

                <div id="sideBar">

                    <ul>

                        <li>Results</li>

                        <li>{cardDataList.length} Profiles</li>

                    </ul>

                    <div className="divider"></div>

                    <div className="scroll-container">

                        <div className="profileCardContainer">

                            {cardDataList.map((cardData, index) => (

                                <div className="profileCard" key={index}>

                                    <div className="row1">

                                        <label>Candidate Name</label>

                                        <h4>{cardData.candidateName}</h4>

                                    </div>

                                    <div className="row2">

                                        <label>Relevant Exp</label>

                                        <label>Total Exp</label>

                                    </div>

                                    <div className="row3">

                                        <h4>{cardData.relevantExp}</h4>

                                        <h4>{cardData.totalExp}</h4>

                                    </div>

                                    <div className="row4">

                                        <label>Current CTC</label>

                                        <label>Expected CTC</label>

                                    </div>

                                    <div className="row5">

                                        <h4>{cardData.currentCTC}</h4>

                                        <h4>{cardData.expectedCTC}</h4>

                                    </div>

                                    <div className="row6">

                                        <button className="button" id="viewButton">View profile</button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div >

                </div>




                <div id="TicketNo">

                    <h4>Ticket No #</h4>

                    <span>TCS_15_28.September.2022_12.October.2022_34lpa_2022-09-28T17:19:06.968113400</span>


                </div>

                <div id="ProfileTracking">
                    <div className="ProfileTrackingLabel"><h4>Profiles Tracking</h4></div>
                    <div className="Rejected"><h4>Rejected <span id="RCount">20</span></h4></div>
                    <div className="Pending"><h4>Pending <span id="PCount">10</span></h4></div>
                    <div className="Approved"><h4>Approved <span id="ACount">00</span></h4></div>
                    <div className="BackButton"></div>
                    
                    
                    </div>

                <div id="InterviewStatus">
                    <img src={InterViewStatus} alt="Interview Status"/>
                        <h3>
                            Select and get interview status once you click on approve
                        </h3>
                        <h4>
                            Nothing is selected
                        </h4>
                </div>

            </div>
        </div>
    );

}