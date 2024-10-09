import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'

export default function Footer() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">About</span>
                        <span className="text-sm">About us</span>
                        <span className="text-sm">Privacy Terms</span>
                        <span className="text-sm">Use Terms</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Contacts</span>
                        <span className="text-sm">suporte@gam3r.store</span>
                        <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>WhatsApp</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2 ">
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandFacebook size={28} stroke={1} />
                        <IconBrandLinkedin size={28} stroke={1} />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
                        <div className="flex gap-1.5">
                            <span>Made with</span>
                            <span>❤️</span>
                            <span>In {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
