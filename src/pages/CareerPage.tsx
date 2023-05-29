import Header from "../components/Header"

const CareerPage = () => {
  return (
    <main>
        <Header />
        <section className="bg-[#8807F7] min-h-[100vh]">
            <div className="max-w-[1250px] mx-auto w-full px-3">
                <div className="py-[169px] lg:ml-[180px] ml-[0px]  flex justify-center relative flex-col ">
                <div className="bg-[#F59E0B] rounded-md text-white font-bold lg:text-[80px] text-[40px] w-full max-w-[841px] pt-[50px] pr[200px">
                    Join us in shaping...
                </div>
                <div className="bg-[#E8356D] rounded-md text-white font-bold lg:text-[80px] text-[40px] w-full max-w-[612px] self-end pt-[50px] pr[200px]">The Future..</div>
                <div className="bg-[#0D9488] rounded-md text-white font-bold lg:text-[80px] text-[40px] w-full max-w-[613px] pt-[50px] absolute bottom-2  pr[200px]">
                    Of Finance...
                </div>
                </div>
                
            </div>

        </section>
        <section>
            <div className="mt-[121px]">
                <h1 className="text-[#3d0072] font-bold text-[60px] max-w-[1350px] mx-auto text-left">The Ardilla Culture</h1>
                <div className="flex mt-[100px] max-w-[1550px] mx-auto gap-2 items-center  w-full justify-between  h-[440px]">
                    <div className="max-w-[571px]">
                        <img src="/anna.png" className="w-full rounded-lg object-contain h-full" alt="" />
                    </div>
                    <div className="flex gap-2 flex-col h-full">
                        <div  className="max-w-[389px] h-1/2 ">
                        <img src="/tarzine.png" className="w-full object-cover  rounded-lg h-full"  alt="" />
                        </div>
                        <div  className="max-w-[389px] h-1/2 ">
                        <img src="/vierra.png" className="w-full rounded-lg object-cover h-full"  alt="" />
                        </div>
                       
                    </div>
                    <div  className="max-w-[571px]">
                        <img src="/cotton.png" className="w-full object-contain rounded-lg h-full"  alt="" />
                    </div>
                </div>
                <div className="flex mt-[60px] mx-auto max-w-[1450px] justify-between">
                    <div className="max-w-[541px]">
                        <h1 className="text-[#3D0072] font-bold text-[30px] mb-[30px] ">Experienced professionals</h1>
                        <p className="text-[#3d0072] text-sm mb-6 leading-8 ">Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.</p>
                        <p className="text-[#3d0072] text-sm leading-8">We have a great team of diverse and talented professionals who share the values of the company. Because of the size of our dream, we need more hands on deck and you are always welcome to apply.</p>
                    </div>
                    <div className="max-w-[541px]">
                        <h1 className="text-[#413150] font-bold text-[30px] mb-[30px] ">We give the best</h1>
                        <p className="text-[#3d0072] text-sm mb-6 leading-8">We know work can be quite dreadful, so we try to make it fun, as much as we can. We also offer competitive salaries as well as great packages.</p>
                        <p className="text-[#3d0072] text-sm leading-8">At Ardilla, dedication and excellence are always rewarded. No politics and no funny business.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1450px] mx-auto mt-[150px]">
                <h1 className="text-[#3d0072] font-bold text-[40px] lg:text-[60px] mb-8">Our Values</h1>
                <p className="text-[#3d0072] text-sm">At Ardilla, our mission is to help people across the continent build wealth and achieve well thought out financial goals. However, we cannot do it alone.</p>
                <div className="flex mb-[40px] justify-between mt-8 ">
                    <div className="bg-[url(/redBack.png)] max-w-[278px]  rounded-r-md rounded-bl-[80px] rounded-br-none h-[600px] bg-contain w-full ">
                        <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                        <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px] ">Excellence</h1>
                        <p className="leading-8">We always bring our A game to work, putting our best foot forward.</p>
                        </div>
                       
                    </div>
                    <div className="bg-[url(/blueBack.png)]  rounded-r-md rounded-bl-[80px] rounded-br-none flex flex-col max-w-[278px] w-full bg-contain h-[657px]justify-center text-white">
                        <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                        
                            <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px] ">Dedication</h1>
                            <p className="leading-8">Consistency is the code to turning dreams to reality and at Ardilla, we have a lot of dreams to transform.</p>
                        </div>
                    </div>
                    <div className="bg-[url(/yellowBack.png)] bg-contain  rounded-r-md rounded-bl-[80px] rounded-br-none h-[657px] flex flex-col max-w-[278px] w-full justify-center text-white">
                    <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white ">
                        <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px]">Team Work</h1>
                        <p className="leading-8">No one ever built anything alone. Strength in numbers is all good but more importantly is strength in working together.</p>
                        </div>
                        
                        </div>
                    <div className="bg-[url(/greenBack.png)]  rounded-r-md rounded-bl-[80px] rounded-br-none flex bg-contain flex-col max-w-[278px] h-[600px] w-full  text-white">
                        <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                        <h1 className="text-[3d0072] font-bold  text-[30px] mb-[66px] ">Positivity</h1>
                        <p className="leading-8">Great attitude to work always wins and at Ardilla we are always big on positivity and a can do mindset.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="text-black mt-[27px] mx-auto max-w-[1450px]">
                <h1 className="text-[#3D0072] font-semibold text-[60px] mt-[270px] mb-[154px]">People are what matters</h1>
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex gap-5 max-w-[600px]">
                        <div className="bg-[url(/whatMatters.png)] w-[281px] h-[255px] bg-cover  rounded-xl"></div>
                        <p className="mt-10 text-[#9CA3Af] leading-8 w-[273px]">Working with Ardilla has exposed me to innovative ideas and advanced technology.</p>
                    </div>
                    <div className="flex gap-5  w-full max-w-[600px]">
                        <div className="bg-[url(/whatMatters.png)] w-[281px]  h-[255px] bg-cover bg-no-repeat rounded-xl"></div>
                        <p className="mt-10 text-[#9CA3Af] leading-8 w-[273px]">Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job</p>
                    </div>
                    <div className="flex gap-5 max-w-[600px]">
                        <div className="bg-[url(/whatMatters.png)] w-[281px] h-[255px] bg-cover rounded-xl"></div>
                        <p className="mt-10 text-[#9CA3Af] leading-8 w-[273px]">At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.</p>
                    </div>
                    <div className="flex gap-5 max-w-[600px] w-full">
                        <div className="bg-[url(/whatMatters.png)] w-[281px] h-[255px] bg-cover bg-no-repeat  rounded-xl"></div>
                        <p className="mt-10 text-[#9CA3Af] w-[273px] leading-8">Although Ardilla is challenging, it is the type of challenge that gets you motivated.</p>
                    </div>
                </div>

            </div>
        </section>
        <section className="bg-[#21003D] h-[100vh]">
            <div className="max-w-[1450] mt-[153px] mx-auto relative">
            <div className="text-white max-w-[873px] text-center leading-[80px]  mx-auto pt-[153px] text-[40px] ">
            Beyond a competitive salary, we offer so much more in support and necessary tools needed to get the best results.
            </div>
            <h1 className="font-bold text-center text-[50px] rotate-[7.76deg] origin-top-left text-white">PERKS</h1>
            <div className="mt-[150px] max-w-[1450px] mx-auto rotate-[7.76deg] origin-top-left bg-[#F6EBFE] rounded-tl-[34px] h-[572px] rounded-tr-[20px] relative">
                <div className="pt-[200px] rotate-[-6deg] origin-top-right left-3 absolute">
                        oisndosdi
                </div>
            </div>
            </div>
            
        </section>
    </main>
  )
}

export default CareerPage