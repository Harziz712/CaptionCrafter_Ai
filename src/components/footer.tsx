// src/components/Footer.tsx
import { SiFacebook, SiInstagram, SiGithub, SiX } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-purple-950/100 min-h-[200px] text-purple-50 mt-20 flex flex-col justify-between">
            <div className="max-w-full mx-auto px-6 py-10 grid gap-8 grid-cols-1 md:grid-cols-4">
                {/* Brand */}
                <div className="space-y-4 md:px-5">
                    <h2 className="text-2xl font-bold text-purple-400">CaptionCrafter.AI</h2>
                    <p className="text-sm">
                        Effortlessly generate AI-powered captions for all your social media needs. Choose your tone, topic, and platform — let CaptionCrafter do the magic!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-5 text-sm">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">How it Works</a></li>
                        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-3 text-white">Resources</h3>
                    <ul className="space-y-5 text-sm">
                        <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#"><SiFacebook className="w-5 h-5 hover:text-blue-600" /></a>
                        <a href="#"><SiInstagram className="w-5 h-5 hover:text-pink-500" /></a>
                        <a href="#"><SiX className="w-5 h-5 hover:text-blue-400" /></a>
                        <a href="#"><SiGithub className="w-5 h-5 hover:text-gray-800" /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 py-4 border-t space-y-2">
            <div> &copy; {new Date().getFullYear()} CaptionCrafter.AI — All rights reserved.</div>
            <div> made with 💻 by HarziizDev</div>
            </div>
        </footer>
    );
};

export default Footer;
