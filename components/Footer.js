import Link from 'next/link';
// import '../styles/squareSection.css';
// import '../styles/branchSection.css';
// import '../styles/footer.css';

const Footer = () =>{
    return (
        <footer className="font-poppins font-light text-white sm:text-sm bg-[#212529] p-5">
            <div className="flex sm:flex-wrap lg:space-x-12">
                <div className='w-80'>
                    <img src="/assets/logo-3.png" alt="" className="w-12" />
                    <p>The Lord hath given me the tongue of the learned,
                        that I should speak a word in season to him that is weary...
                        ISAIAH 50: 4</p>
                </div>
                <div className="flex px-5 space-x-8 justify-between">
                    <div className='space-y-3'>
                        <p>CONTACT INFO</p>
                        <ul style={{listStyleType:'none'}}>
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
                            <div className='flex flex-row footer-icons-custom'>
                                <i class="bi bi-facebook p-1 px-2"></i>
                                <i className="bi bi-twitter p-1 px-2 mx-2"></i>
                                <i className="bi bi-instagram p-1 px-2 mx-2"></i>
                                <i className="bi bi-youtube p-1 px-2 mx-2"></i>
                            </div>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <p className='space-y-2'>QUICK LINKS</p>
                        <ul className='list-line'>
                            <li className='list-pd'><Link href="/aboutus">About us</Link></li>
                            <li className='list-pd'><a href="">Directorates</a></li>
                            <li className='list-pd'><a href="">Branches</a></li>
                            <li className='list-pd'><a href="">Dues/Donations</a></li>
                            <li className='list-pd'><a href="">Conference</a></li>
                            <li className='list-pd'><Link href="/getinvolved">Get Involved</Link></li>
                            <li className='list-pd'><a href="">Membership</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;