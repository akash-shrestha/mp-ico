import Link from "next/link";
import NavigationStyleWrapper from "./Navigation.style";
import menus from "@assets/data/menu2.js"
import menuShape from "@assets/images/project/menu-image.png"

const Navigation = () => {

    return (
        <NavigationStyleWrapper>
            <div className="navigation_links">
                {menus?.map((menu, i) => (
                    <Link key={i} href={menu.url}>
                        <a>{menu.title} <img src={menuShape.src} alt="shape" /> </a>
                    </Link>
                ))}
            </div>
        </NavigationStyleWrapper>
    )
}

export default Navigation;