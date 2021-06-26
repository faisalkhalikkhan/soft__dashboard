import './Header.css'


// import { IconButton } from '@material-ui/core'
import { KeyboardArrowDown, Notifications, Add, Search } from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">
                <Notifications className="btn__white" />
                {/* <IconButton >
                </IconButton> */}
                <p id="hero__text">John Bayer</p>
                <Avatar src="Hero.png" style={{ width: "30px", height: "30px" }} />
                <KeyboardArrowDown className="btn__white" />
            </div>
            <div className="header__end">
                <div className="header__end__left">
                    <span>Dashboard</span>
                    <p>Monday, <span>02 july 2020</span></p>
                </div>
                <div className="header__end__right">
                    <Button variant="contained" style={{ color: "white", backgroundColor: "rgb(0, 163, 212)" }}>
                        <Add />
                        Add
                    </Button>
                    <div className="input__box">
                        <Search />
                        <input type="text" placeholder="Search for Application here " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
