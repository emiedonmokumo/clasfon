const BranchRow = () =>{
    return (
        <div className="container mx-auto bg-dark text-white p-5">
            <div className="m-5">
                <div className="flex flex-row justify-evenly sm:flex-col">
                    <div className="flex flex-col text-center">
                        <i class="bi bi-people text-2xl text-lightRed"></i>
                        <h1 className="text-4xl">600+</h1>
                        <h4 className="text-2xl">Members</h4>
                    </div>
                    <div className="flex flex-col text-center sm:my-8">
                        <i className="bi bi-geo-alt-fill text-2xl text-lightRed"></i>
                        <h1 className="text-4xl">50+</h1>
                        <h4 className="text-2xl">Branches</h4>
                    </div>
                    <div className="flex flex-col text-center">
                        <i className="bi bi-globe text-2xl text-lightRed"></i>
                        <h1 className="text-4xl">6</h1>
                        <h4 className="text-2xl">Regions</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BranchRow;