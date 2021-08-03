import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FooterMenuItem from './FooterMenuItem';

export default function FooterButton () {
    const { t, i18n } = useTranslation();
    const [isDropDown, setIsDropDown] = useState(false)

    const clickMenuItem = (e) => {
        console.log(e.target)
        e.target.className="click-menu"
    }

    document.querySelectorAll("li").forEach((li, i)=>{
        li.addEventListener("click", function(){
        console.log(this)
        console.log(i)
    })
    })

    return(
        <footer>
            <hr/>
            <div className="web-wrapper">
                <FooterMenuItem t={t} />
                <FooterMenuItem t={t} />
                <FooterMenuItem t={t} />
                <FooterMenuItem t={t} />
                <FooterMenuItem t={t} />
            </div>
            <p className="copyright">Copyright © 2020-2021 LearnToDrive Limited. All Rights Reserved. <span>版權所有 不得轉載</span></p>
            
        </footer>            
    )
}

