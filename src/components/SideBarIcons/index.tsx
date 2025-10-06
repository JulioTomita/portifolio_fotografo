interface SideBarIconsProps {
    title: string;
    href: string;
    isActive?: boolean;
}

export default function SideBarIcons({ title, href, isActive }: SideBarIconsProps) {
    return <div className="border-b border-white pb-1">
        <li className={`hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`}>
            <a href={href}>{title}</a>
        </li>
    </div>
}