import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";

export default function Feed() {
    return (
        <div className="feedContainer">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
