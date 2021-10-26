import "./Share.css"
import Avatar from '@mui/material/Avatar';

export default function Share() {
    return (
        <div className="postContainer">
            <div className="shareWrapper">
                <Avatar className="avatar" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
                <div className="share">
                    <input className="shareInput" placeholder="What's on your mind?"></input>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}