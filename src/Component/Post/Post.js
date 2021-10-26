import "./Post.css"
import Avatar from '@mui/material/Avatar';
import {ThumbUp, Comment, Share} from '@mui/icons-material'

export default function Post() {
    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postUser">
                    <Avatar 
                        src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/120037520_3956612444384646_4758954330550108770_n.png?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=voG6fY83PXQAX-JnfIb&tn=LEHI-NvZo5jpzVxn&_nc_ht=scontent.fhan3-5.fna&oh=11bd48c055cd5756ae473dd92c36cfe1&oe=619B98A3" 
                        sx={{ width: 35, height: 35 }}
                    />
                    <span className="postUserName">Theanh28 Entertainment</span>
                </div>
                <span className="caption">Về sớm cho đỡ tắc đường 😌</span>
                <img
                    src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/p843x403/245509545_5337243222988221_2663453815431676114_n.jpg?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=NOijW4PlkqQAX_j3c0Q&_nc_ht=scontent.fhan3-5.fna&oh=23bd4b783fb653ccd2fc7c2146c91fde&oe=619CC74D"
                    className="imgPost"
                />
                <div className="postInfo">
                    <span>33 peoples like this post</span>
                    <span>10 Comments</span>
                    <span>1 share</span>
                </div>
                <hr/>
                <div className="interact">
                    <div className="interactItem">
                        <ThumbUp className="like"/>
                        <span className="interactName">Like</span>
                    </div>
                    <div className="interactItem">
                        <Comment className="like"/>
                        <span className="interactName">Comment</span>
                    </div>
                    <div className="interactItem">
                        <Share className="like"/>
                        <span className="interactName">Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
