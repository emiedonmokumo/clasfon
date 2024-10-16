import React from 'react'
import executives from '../../executives.json'
import Navbar from '@/components/Navbar'
import { FaClock, FaGlobe, FaNetworkWired, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <div className='bg-milk'>
                <div className="h-96 flex justify-center items-center" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/aboutus.jpg)`, borderRadius: '0 0 50% 50%' }}>
                    <div className="lg:px-16 py-5">
                        <Navbar />
                        <div className="py-8 text-center text-white">
                            <p className="text-white sm:text-sm sm:mb-3">Christian Lawyer's Fellowship of Nigeria</p>
                            <h1 className="text-6xl font-bold play-fair sm:text-3xl">About us</h1>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto text-dark p-3">
                    <div className="m-3">
                        <div className="flex flex-row justify-evenly sm:flex-col">
                            <div className="flex flex-col justify-center items-center space-y-3">
                                <FaClock className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">42</h1>
                                <h4 className="text-2xl sm:text-xl">Years</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 my-3">
                                <FaUsers className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">2,000+</h1>
                                <h4 className="text-2xl sm:text-xl">Members</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3">
                                <FaGlobe className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">50+</h1>
                                <h4 className="text-2xl sm:text-xl">Branches</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 my-3">
                                <FaNetworkWired className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">5</h1>
                                <h4 className="text-2xl sm:text-xl">Regions</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-12 p-10 space-x-16'>
                <div className='text-justify font-playfair'>
                    <h2 className='text-3xl font-bold pb-5'>Our History</h2>
                    <p className='leading-7'>CLASFON had earlier began with 11 Christian Law Students at the Law School in 1979. CLASFON at the Students level officially began in 1991 and is currently in her 32nd anniversary. The CLASFON National Students Annual Conference which began in 1992 has successfully held 30 editions with the 31st edition to be held at the Obafemi Awolowo University, Ile Ife from the 6-10th of September this year (2023).
                        Christian Students in accredited Law faculties of Nigerian Universities are considered Associate members of the fellowship. For purpose of administrative efficiency among the students, a BYE LAW has been produced to guide the operations of the Students arm of the Fellowship. This Bye law is subject to the provisions of the Constitution of CLASFON.
                        The National Field Representative (NFR) oversees the Students Ministry of the Fellowship. He does this by collaborating with the National Executive Director (NED) under the supervision of the National Assistant Secretary (ANS) who is mandated by the AGM and CLASFON Constitution to interface with the students on behalf of NEC.
                        At present, there are about 60 chapters of CLASFON in Nigerian Universities and in all the 7 campuses of the Nigerian Law School.
                    </p>
                </div>
                <img src="/assets/about.png" alt="" />
            </div>
            <div className="my-5 bg-gray-100 text-gray-800 p-5 lg:p-10">
                <div className="container mx-auto flex flex-col">
                    <div className='flex space-x-16'>
                        {/* Aims and Objectives Section */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-5">1.2 Aims and Objectives</h2>
                            <ul className="list-disc list-inside space-y-2 text-sm leading-8">
                                <li>To protect and defend the name of the person of Jesus Christ through the Member’s words, lives, studies and scholarship as law students.</li>
                                <li>To see our study of law as a mission with a firm commitment to speaking effectively about the Gospel and its impact on problems of law and society.</li>
                                <li>To acquire training and capacity to practice law as a vocation and calling from God.</li>
                                <li>
                                    To provide for exchange of information and experience relating to the practical problem of the Christian law students and the application of the principle of the Christian faith to current legal and social problem that affect members by:
                                    <ul className="list-disc list-inside ml-5 space-y-1">
                                        <li>Publications in all form in furtherance of the fellowship’s aims and objectives.</li>
                                        <li>Organising the fellowship’s meetings, National and Regional Conferences, seminars, lectures, workshops and other suitable activities that will promote the aims and objectives of the fellowship.</li>
                                    </ul>
                                </li>
                                <li>To encourage prayers, visits, counselling and such other activities of the fellowship for all persons connected with the study of law.</li>
                                <li>To pursue the path of truth, justice, honour and righteousness and integrity through evangelism and other spiritual activities among fellow students.</li>
                                <li>To provide human and material resources for the attainment of excellence in legal studies through networking and mentorship by staff of the faculty of Laws and members of the parent body.</li>
                                <li>To pursue the attainment of capacity for the achievement of the overall aims and objectives of the Fellowship at the parent body as spelt out in its Constitution.</li>
                                <li>To collaborate with persons and organisations within and outside Nigeria in the pursuit of similar goals and objectives.</li>
                            </ul>
                        </section>

                        {/* Vision Section */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-5">Our Vision</h2>
                            <ul className="list-disc list-inside space-y-2 text-sm leading-8">
                                <li>Projecting the image of Christ through the practice of the legal profession in a way that glorifies God. (1 Corinthians 10:31)</li>
                                <li>Working as a mission with a firm commitment to speaking effectively about the gospel and its impact on problems of law and society. (Mathew 28:18-20)</li>
                                <li>To practice our vocation as part of our calling from God. (1 Timothy 4:14–16)</li>
                                <li>To support law students who are Christians. (Galatians 6:10)</li>
                                <li>To provide spiritual, moral, and financial support for ex-convicts who have come into contact with the saving grace of our Lord and Savior, Jesus Christ. (Gal.6:2, Hebrews 6:10, Prov.3:27)</li>
                                <li>To encourage prayers for all persons concerned with the legal profession. (Ephesians 6:8, Col. 1:9, Isaiah 40:31)</li>
                                <li>To diligently pursue the path of truth, justice, honor, and integrity in the legal profession and the larger society. (Isaiah 56:1-2, Prov. 22:29).</li>
                                <li>To strive for the highest professional ethics in the practice of law. (Philippians 4:13, Matthew 5:48, Isaiah 41:10)</li>
                                <li>
                                    To provide for the exchange of information and experience relating to the practical problems of the Christian lawyer and the application of the principles of the Christian faith to the current legal and social problems through:
                                    <ul className="list-disc list-inside ml-5 space-y-1">
                                        <li>Publication (Habakkuk 2:2, Deut. 6:6-9)</li>
                                        <li>Organizing fellowship meetings, national and regional conferences, lectures and other suitable activities. (Hebrews 10:25, Prov.27:17)</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className='flex space-x-16'>
                        {/* Mission Section */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-5">Our Mission</h2>
                            <p className='text-sm leading-8'>CLASFON has been involved in a variety of mission projects that align with its goals and objectives. The various directorates have been involved in many events with organizations of the government and NGOs. Activities such as:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 text-sm leading-8">
                                <li>Distribution of relief materials and trauma counseling for the IDPs in Abuja with the collaboration of the National Emergency Agency (NEMA).</li>
                                <li>Free distribution of Bible devotionals (in the secret place) in Nigerian prisons occurs annually.</li>
                                <li>CLASFON has been organizing workshops and a symposium for church leaders across the country in order to raise awareness about legal issues affecting the church and Christians.</li>
                                <li>CLASFON has been representing the church and Christian community in Nigeria in the defense and protection of religious liberty.</li>
                                <li>CLASFON is involved in the pro bono defense of indigent accused persons, whether in prison or awaiting trial outside of prison.</li>
                                <li>Prison visitation has become a regular part of CLASFON’s activities.</li>
                                <li>The fellowship is deeply interested in the students’ work and has been effectively participating in the various activities of the students both at the local chapter and national level.</li>
                                <li>The reintroduction of the quiz and annual moot court competition during the student conference.</li>
                                <li>The introduction of directorate breakup sessions during the students’ conference.</li>
                                <li>CLASFON branches are active in the law school fellowship activities near them as well as the university fellowship.</li>
                            </ul>
                        </section>
                        {/* Statement of Faith Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-5">1.3 Statement of Faith</h2>
                            <ul className="list-disc list-inside space-y-2 text-sm leading-8">
                                <li>We believe in one God, the maker of all things, eternally existing in the TRINITY of the Father, Son and Holy Spirit.</li>
                                <li>We believe the Bible in its entirety to be the inspired word of God and the holy infallible rule of faith and conduct.</li>
                                <li>We believe in the resurrection of the dead, the eternal happiness of the saved with God and the eternal damnation of the unsaved with Satan.</li>
                                <li>We believe in the personal salvation of everyone who acknowledges, confesses and forsakes his sin and exercises faith (belief) in the sacrifice of Jesus Christ for the cleansing of sin through His blood.</li>
                                <li>We believe in the baptism of the Holy Spirit accompanied by the initial evidence or sign of speaking in other tongues as the spirit of God gives utterance as distinct from the new birth.</li>
                                <li>We believe in the Christian’s hope – the imminent personal and visible return of the Lord Jesus Christ.</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
            <div className='p-5 py-16 bg-black text-white flex justify-center space-x-20 items-center'>
                <div className=''>
                    <img src="/assets/logo-3.png" alt="" className='h-80' />
                </div>
                <div className="mb-10 w-1/2">
                    <h2 className="text-2xl font-bold mb-5">Our Core Values</h2>
                    <p>To equip members spiritually and professionally to serve God and humanity in their respective legal professional capacities as judges, magistrates, advocates, solicitors, legislators, teachers, administrators, and law students.</p>
                    <ul className="list-none list-inside space-y-2 mt-2">
                        <li><b>Isaiah 50:4,</b> “The Lord God hath given me the tongue of the learned, that I should know how to speak a word in season to him that is weary.”</li>
                        <li><b>Isaiah 56:1,</b> “Thus saith the Lord, keep ye judgment, and do justice; for my salvation is near to come, and my righteousness to be revealed.”</li>
                        <li><b>Proverbs 22:29,</b> “Seest thou a man diligent in his business? He shall stand before kings; he shall not stand before mean men.”</li>
                        <li><b>Titus 2:11–12,</b> “For the grace of God that bringeth salvation hath appeared to all men, teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly in this present world.”</li>
                        <li><b>Galatians 2:20,</b> Hebrews 12:1–2, Romans 12:1–2, and Romans 14:17–18.</li>
                    </ul>
                    <button className='mt-5'><Link href={'/content/presidentialreport.pdf'} className="bg-[#96000C] hover:bg-[#b40a18] text-white lg:py-3 lg:px-5 sm:py-2 sm:px-3 rounded-3xl font-poppins sm:text-xs">View Constitution</Link></button>
                </div>
            </div>
            <div className="p-5">
                <h1 className="ml-4 font-bold text-3xl mb-3">CLASFON Executives</h1>
                <div className="flex flex-wrap justify-start">
                    {executives.map((executive, index) => (
                        <div key={index} className="m-5 max-w-64">
                            <img src={executive.img} alt="" className="w-full max-h-30 object-contain" />
                            <h3 className="bg-darkRed text-white p-2 uppercase sm:text-sm">{executive.name}</h3>
                            <h3 className="my-1 bg-milk text-dark p-2 sm:text-sm">{executive.position}</h3>
                            <h3 className="bg-milk text-dark h3 p-2 sm:text-sm">{executive.school}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
