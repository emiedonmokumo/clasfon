import Button from './Button';

const UpcomingEvent = () => {
    return (
        <div className="container mx-auto p-5 justify-center">
            <h3 className="text-3xl my-5">Upcoming Events</h3>
            <div className="container flex flex-row md:flex-col sm:flex-col">
                <div className="shadow-xl">
                    <a href="">
                        <img src="/assets/conference.jpg" alt=""  style={{width:'100%'}}/>
                    </a>
                    <div className="p-8">
                        <ul className="flex flex-row list-none">
                            <li>2-6 August 2023</li>
                            <li className="mx-2"></li>
                            <li>Port Harcourt</li>
                        </ul>
                        <div className="my-5">
                            <h4 className="font-bold text-2xl">CLASFON CONFERENCE 2023</h4>
                            <p>We are excited to announce that the 2023 National Conference will take place August 2–6 in Port-Harcourt, Nigeria. Learn more and register now ...</p>
                        </div>
                    </div>
                </div>
                <div className="md:my-12" style={{marginLeft:'15px'}}>
                    <div className="flex flex-row md:my-12">
                        <div className="flex flex-col p-5 text-white bg-lightRed">
                            <span>Mar.</span>
                            <span className='text-3xl font-bold'>09</span>
                            <span>2023</span>
                        </div>
                        <div className="mx-5">
                            <ul className="flex flex-row list-none">
                                <li className='font-semibold'>5:00PM</li>
                                <li className="mx-5"></li>
                                <li className='font-semibold'>Fully Virtual</li>
                            </ul>
                            <h4 className="font-bold my-3">1st Quarter President-In-Council</h4>
                            <p>Periodically, we gather across regions to discuss and plan for the soul and well-being of the fellowship's members.</p>
                        </div>
                    </div>
                    <div className="flex flex-row my-12">
                        <div className="flex flex-col p-5 text-white bg-lightRed">
                            <span>June</span>
                            <span className='text-3xl font-bold'>08</span>
                            <span>2023</span>
                        </div>
                        <div className="mx-5">
                            <ul className="flex flex-row list-none">
                                <li className='font-semibold'>5:00PM</li>
                                <li className="mx-5"></li>
                                <li className='font-semibold'>Fully Virtual</li>
                            </ul>
                            <h4 className="font-bold my-3">1st Quarter President-In-Council</h4>
                            <p>Periodically, we gather across regions to discuss and plan for the soul and well-being of the fellowship's members.</p>
                        </div>
                    </div>
                    <div className="my-5 text-center">
                        <Button url={'#'} title={'Register Here'} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpcomingEvent;