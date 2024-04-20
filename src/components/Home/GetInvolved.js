import Button from "../Button";

const GetInvolved = () => {
    return (
        <div className="my-5">
            <div className="container mx-auto flex flex-row  text-center leading-8 md:flex-col sm:flex-col">
                <div className="p-8 bg-dark text-white lg:mx-4">
                    <h3 className="text-3xl font-bold">Get Involved</h3>
                    <p className="py-5">We are dedicated to serving Jesus Christ through the practice and study of law, the defense of religious freedom and life, and the provision of legal aid to the needy. Join us and let's accomplish this together.</p>
                    <Button url={'#'} title={'Get Involved'}/>
                </div>
                <div className="p-8 bg-dark text-white lg:mx-4">
                    <h3 className="text-3xl font-bold">Find A Branch</h3>
                    <p className="py-5">There are over 60 CLASFON branches and university fellowships in Nigeria. Browse a list of branches in your local area and across the country, and connect with them through our online directory.</p>
                    <Button url={'#'} title={'VIEW DIRECTORY'}/>
                </div>
            </div>
        </div>
    )
};

export default GetInvolved;