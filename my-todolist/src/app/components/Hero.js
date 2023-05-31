import { React, useState, useClient } from "react";
import DarkModeBtn from "../DarkModeBtn";
import Swiper from "swiper/bundle";

function DarkModeBtn(props) {
    const [mode, setMode] = useState("tea")
    const page = document.getElementsByTagName('html')
    page.classList.add(mode)

    function changeTheme() {
        setMode(props.theme)
        page.classList.replace(props.theme)
    }

    return (
        <>
            <button type='button' name='mode-btn' value='theme' onClick={changeTheme()}> change mode</button>
        </>)
}

function Hero() {
    return (
        <section className="banner-section w-[80%] h-fit flex flex-col gap-[20px] max-w-[1200px]">
            <DarkModeBtn />
            <div className="banner-h-products upper  h-[400px] flex justify-center items-center">
                this will contain a horizontal slider of milktea banner
            </div>
            <div className="lower flex gap-4">
                <nav className="banner-aside-nav w-[150px]">
                    banner as nav that will change the h-banner and the content
                </nav>
                <div className="banner-content w-[500px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </section>
    )
}

export default useClient(Hero)