import { Link } from 'react-router-dom'
import '../styles/squareSection.css';
import '../styles/branchSection.css';
import '../styles/footer.css';

const Footer = () =>{
    return (
        <footer className="sintony text-white sm:text-xs">
            <div className="flex flex-row container mx-auto p-5 justify-between md:flex-col sm:flex-col">
                <div className='lg:w-80'>
                    <img src="/assets/logo-3.png" alt="" className="logo" />
                    <p>The Lord hath given me the tongue of the learned,
                        that I should speak a word in season to him that is weary...
                        ISAIAH 50: 4</p>
                </div>
                <div className="flex flex-row justify-evenly md:flex-col-reverse sm:flex-col-reverse">
                    <div style={{width:'50%'}}>
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
                    <div>
                        <p>QUICK LINKS</p>
                        <ul className='list-line'>
                            <li className='list-pd'><Link to="/aboutus">About us</Link></li>
                            <li className='list-pd'><a href="">Directorates</a></li>
                            <li className='list-pd'><a href="">Branches</a></li>
                            <li className='list-pd'><a href="">Dues/Donations</a></li>
                            <li className='list-pd'><a href="">Conference</a></li>
                            <li className='list-pd'><Link to="/getinvolved">Get Involved</Link></li>
                            <li className='list-pd'><a href="">Membership</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;