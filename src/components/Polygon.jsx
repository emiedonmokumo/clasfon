const Polygon = () =>{
    return (
        <div className="container flex section-no-border" style={{position:'relative',padding:'70px 0 160px', overflow: 'hidden'}}>
            <img className='custom-cloud sm:hidden' src="/assets/left-cloud.png" alt="" />
            <div className='polygon left-pos sm:hidden md:hidden'></div>
            <div className='polygon-sm left-pos sm:hidden md:hidden'></div>
            <img src="/assets/right-cloud.png" alt="" className="custom-cloud right-pos sm:hidden"/>
            <div className='polygon right-pos sm:hidden md:hidden'></div>
            <div className='polygon-sm right-pos sm:hidden md:hidden'></div>
            <div className='row justify-content-center txt-center'>
            <div className='container' style={{position: 'relative', maxWidth: '720px'}}>
                    <div className="mx-12">
                        <div style={{lineHeight:'42px'}}>
                            <h2 className='play-fair'>A fellowship of lawyers who believe in Jesus as Savior and Lord</h2>
                            <p className='sintony'>We understand and believe that the practice of law is a calling from God. Hence, it our responsibility to work with others to prusue what justice requires in a free and democratic society. We exist as a fellowship because of a collective imagination about the work of a Christian lawyer and a shared sense of responsibility for the communication of the gospel in and through the legal profession</p><br />
                            </div>
                            <div style={{marginTop:'1rem'}}>
                                <a href="" className='text-white bg-darkRed p-5 hover:bg-lightRed' >LEARN MORE</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Polygon;