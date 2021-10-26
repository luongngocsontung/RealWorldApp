import "./TopBar.css";
import { Search, Home, ChatBubble, Notifications, LiveTv, LocalMall, Groups, SportsEsports} from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';

export default function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <img className="logo" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" />
                <div className="search">
                    <Search />
                    <input className="searchInput" placeholder="Search Facebook"></input>
                </div>
            </div>

            <div className="topBarMiddle">
                <div className="topBarIcon">
                    <div className="topBarIconMiddle">
                        <Home className="middleIcon"/>
                    </div>
                    <div className="topBarIconMiddle">
                        <LiveTv className="middleIcon"/>
                    </div>
                    <div className="topBarIconMiddle">
                        <LocalMall className="middleIcon"/>
                    </div>
                    <div className="topBarIconMiddle">
                        <Groups className="middleIcon"/>
                    </div>
                    <div className="topBarIconMiddle">
                        <SportsEsports className="middleIcon"/>
                    </div>
                </div>
            </div>

            <div className="topBarRight">
                <div className="topBarIcon">
                    <div className="topBarIconAvatar">
                        <Avatar className="avatar" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }}/>
                        <span className="userName">Tung</span>
                    </div>
                    <div className="topBarIconItem">
                        <ChatBubble />
                    </div>
                    <div className="topBarIconItem">
                        <Notifications />
                    </div>
                </div>
            </div>
        </div>
    )
}
