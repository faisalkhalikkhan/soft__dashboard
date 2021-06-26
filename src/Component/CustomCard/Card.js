import React from 'react'
import './Card.css'

import { IconButton } from '@material-ui/core'
import { MoreHoriz, CallMade } from '@material-ui/icons'
import CircularProgressWithLabel from '../Progressbar/CircularProgressWithLabel'

const Card = ({ bg, colo, ringColor }) => {
    return (
        <div className="card" style={{ backgroundColor: bg }}>
            <div className="card__top">
                <p>Total Applications</p>
                <IconButton style={{ width: "12px", height: "12px" }}>
                    <MoreHoriz id="icon" />
                </IconButton>
            </div>
            <div className="card__middle">
                <div className="middle__left">
                    <p id="number">7956</p>
                    <span style={{ color: colo }}><CallMade style={{ height: "10px", color: colo }} />+3.7%</span>
                </div>
                <div className="middle__right">
                    <CircularProgressWithLabel value={45} ringColori={ringColor} />
                </div>
            </div>
        </div>
    )
}

export default Card
