import TopBar from "../TopBar/TopBar"
import SlideBarLeft from "../SlideBarLeft/SlideBarLeft"
import SlideBarRight from "../SlideBarRight/SlideBarRight"
import Feed from "../Feed/Feed"
import "./HomePage.css"

export default function HomePage() {
    return (
        <>
            <TopBar/>
            <div className="homePageContainer">
                <SlideBarLeft/>
                <Feed/>
                <SlideBarRight/>
            </div>
        </>
    )
}
