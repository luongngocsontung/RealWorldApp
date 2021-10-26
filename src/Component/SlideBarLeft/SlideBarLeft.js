import "./SlideBarLeft.css";
import {Group, Groups, AccessTime} from "@mui/icons-material"

export default function SlideBarLeft() {
    return (
        <div className="slideBarLeftContainer">
            <div className="leftBarWrapper">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <Groups className="leftBarIcon"/>
                        <span className="leftBarItemName">Groups</span>
                    </li>
                    <li className="leftBarListItem">
                        <Group className="leftBarIcon"/>
                        <span className="leftBarItemName">Friend</span>
                    </li>
                    <li className="leftBarListItem">
                        <AccessTime className="leftBarIcon"/>
                        <span className="leftBarItemName">Memories</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
