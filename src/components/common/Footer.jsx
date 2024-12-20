import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaBlog } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">AGENCY</h3>
            <p className="text-gray-400">Creative Digital Solutions</p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <span className="mr-4">02-557-6565</span>
            <span className="mx-4">·</span>
            <span className="mr-4">hello@agency.com</span>
            <span className="mx-4">·</span>
            <span>서울 강남구 테헤란로 437, 8F</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/blog">
              <FaBlog className="text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
