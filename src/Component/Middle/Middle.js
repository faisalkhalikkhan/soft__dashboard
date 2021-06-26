import { FiberManualRecord, Folder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './Middle.css'

import MyLineChart from '../LineChart/MyLineChart'
import { LinearProgress } from '@material-ui/core'

const Middle = () => {
    return (
        <div className="middle">
            <div className="middle__left__middle">
                <div className="middle__left__top">
                    <p>Applications Received</p>
                    <p>This Year</p>
                    <p>This Weak</p>
                    <p>Today</p>
                    <div className="middle__btn">
                        <Folder />
                        <p id="download__text">Download Report</p>
                        <MoreVert />
                    </div>
                </div>
                <MyLineChart />

            </div>
            <div className="total__application__box">
                <p className="margin__buttom">Total Applications</p>
                <div className="items__application__box">
                    <FiberManualRecord style={{ width: "15px", height: "15px" }} />
                    <span id="application">Application</span>
                    <span><LinearProgress variant="determinate" value={65} style={{ width: "100px", height: "10px", marginTop: "5px", color: "#f4f4f4" }} /></span>
                </div>
                <div className="items__application__box">
                    <FiberManualRecord style={{ width: "15px", height: "15px" }} />
                    <span id="application">Short Listed</span>
                    <span><LinearProgress variant="determinate" value={65} style={{ width: "100px", height: "10px", marginTop: "5px", color: "#f4f4f4" }} /></span>
                </div>
                <div className="items__application__box">
                    <FiberManualRecord style={{ width: "15px", height: "15px" }} />
                    <span id="application">Application</span>
                    <span><LinearProgress variant="determinate" color="secondary" value={65} style={{ width: "100px", height: "10px", marginTop: "5px", color: "#f4f4f4" }} /></span>
                </div>
                <div className="items__application__box">
                    <FiberManualRecord style={{ width: "15px", height: "15px" }} />
                    <span id="application">On hold</span>
                    <span><LinearProgress variant="determinate" value={65} style={{ width: "100px", height: "10px", marginTop: "5px", color: "#f4f4f4" }} /></span>
                </div>
                <div className="items__application__box">
                    <FiberManualRecord style={{ width: "15px", height: "15px" }} />
                    <span id="application">Application</span>
                    <span><LinearProgress variant="determinate" value={65} style={{ width: "100px", height: "10px", marginTop: "5px", color: "#f4f4f4" }} /></span>
                </div>

            </div>

        </div>
    )
}

export default Middle
