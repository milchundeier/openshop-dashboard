import classNames from 'classnames';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from 'lib/consts/navigation';
import React from 'react'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const linkClasses = 'flex items-center gap-2 font-right px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className="text-neutral-100 text-lg">OpenShop</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}>{item.label}</SidebarLink>
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} item={link} />
				))}
				<div className={classNames(linkClasses, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
        </div>
    )
}

function SidebarLink({ item }) {

    const {pathname} = useLocation()

    return (
        <Link to={item.path} className={classNames(pathname===item.path?'text-white':'text-neutral-400',linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )

}