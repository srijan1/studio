import { Logo } from "@/components/logo";
import Link from "next/link";

const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
        {children}
    </Link>
);

export function Footer() {
    return (
        <footer className="bg-secondary border-t">
            <div className="container py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <Logo />
                    <p className="text-center text-muted-foreground">
                        &copy; {new Date().getFullYear()} Shri Gopal Krishna Gaushala Seva Trust. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1.2-3.1 2.2-5 3-1.8 1-3.9 1.8-6 2.3-2 .5-4.1.8-6.2.8-.5 0-1-.1-1.5-.2.2.3.4.6.7.8.3.2.6.4.9.6.5.3 1.1.5 1.7.7.6.2 1.3.3 2 .3.6 0 1.2-.1 1.8-.2.6-.1 1.2-.3 1.8-.5.6-.2 1.2-.5 1.7-.8.5-.3 1-.7 1.4-1.1.2-.2.4-.4.6-.6s.4-.5.5-.7c.2-.3.3-.5.4-.8.1-.3.2-.6.3-.9.1-.3.1-.6.2-.9.1-.3.1-.6.1-.9v-.1s0-.1 0-.1c0-.2.1-.4.1-.6 0-.2 0-.4 0-.6s0-.4-.1-.6c0-.2-.1-.4-.1-.6s-.1-.4-.2-.6c-.1-.2-.2-.4-.3-.6s-.2-.4-.4-.6c-.2-.2-.3-.4-.5-.5-.2-.1-.4-.3-.6-.4-.2-.1-.5-.2-.7-.3-.2-.1-.5-.1-.7-.2-.2 0-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.1c-1.3-.1-2.6-.4-3.8-1-1.2-.6-2.3-1.3-3.3-2.3-1.8-1.8-3-4.2-3.6-6.8.9.2 1.8.3 2.7.3.7 0 1.4-.1 2.1-.2-.7-.5-1.3-1.2-1.7-2-.5-.8-.7-1.7-.7-2.6 0-.6.1-1.2.4-1.8 2.1 2.6 5.1 4.3 8.6 4.6-.1-.3-.1-.6-.1-.9 0-1.1.4-2.1 1.2-2.8.8-.8 1.8-1.2 2.8-1.2.9 0 1.8.3 2.5 1 .7-.1 1.4-.4 2-.8-.2.8-.8 1.4-1.5 1.8.6-.1 1.2-.3 1.8-.5-.4.7-1 1.3-1.6 1.8z"/></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    )
}
