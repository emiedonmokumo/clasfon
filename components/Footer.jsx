import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () =>{
    return (
        <footer className="font-poppins text-white text-sm bg-[#212529] p-5 lg:pt-8">
            <div className="flex sm:flex-wrap justify-between lg:px-16 lg:py-5">
                <div className='w-80'>
                    <img src="/assets/logo-3.png" alt="" className="w-12 sm:mb-3" />
                    <p>The Lord hath given me the tongue of the learned,
                        that I should speak a word in season to him that is weary...
                        ISAIAH 50: 4</p>
                </div>
                <div className="flex lg:px-5 lg:space-x-8 lg:justify-between sm:flex-col">
                    <div className='space-y-3 sm:mb-5'>
                        <p>CONTACT INFO</p>
                        <ul style={{listStyleType:'none'}} className='flex flex-col space-y-3'>
                            <div className="list-pd list-line">
                                <li><strong>ADDRESS</strong></li>
                                <li>Suite 106, Cooper House, 4, Algiers Street, Zone 5 Wuse, Abuja, Nigeria</li>
                            </div>
                            <div className="list-pd list-line">
                                <li><strong>PHONE</strong></li>
                                <li>(+234) 810 656 7902</li>
                            </div>
                            <div className="list-pd list-line">
                                <li>EMAIL</li>
                                <li>info@clasfon.org.ng</li>
                            </div>
                            <div className='flex flex-row space-x-3'>
                                <Link href={'#'} className=''><FaFacebook className='lg:text-lg' /></Link>
                                <Link href={'#'} className=''><FaInstagram className='lg:text-lg' /></Link>
                                <Link href={'#'} className=''><FaTwitter className='lg:text-lg' /></Link>
                                <Link href={'#'} className=''><FaYoutube className='lg:text-lg' /></Link>
                            </div>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <p className='space-y-2'>QUICK LINKS</p>
                        <ul className='list-line flex flex-col space-y-2'>
                            <li className='list-pd'><Link href="/about">About us</Link></li>
                            <li className='list-pd'><a href="">Directorates</a></li>
                            <li className='list-pd'><a href="">Branches</a></li>
                            <li className='list-pd'><a href="">Dues/Donations</a></li>
                            <li className='list-pd'><a href="">Conference</a></li>
                            <li className='list-pd'><Link href="#">Get Involved</Link></li>
                            <li className='list-pd'><a href="">Membership</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;