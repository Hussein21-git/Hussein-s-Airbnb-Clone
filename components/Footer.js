import Image from "next/image";

function Footer() {
    return (
        <section className=" relative py-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14">    
           <Image src="/favicon3.ico"
           layout={"fill"}
           objectFit="cover"
           className="rounded-2xl"
           />
            <div className="space-y-9 text-lg text-yellow-600 ">
                <h5 className="relative font-bold cursor-pointer text-2xl">ABOUT</h5>
                <p className="relative cursor-pointer ">How Airbnb works</p>
                <p className="relative cursor-pointer ">News room</p>
                <p className="relative cursor-pointer ">Investors</p>
                <p className="relative cursor-pointer">Airbnb Plus</p>
                <p className="relative cursor-pointer">Airbnb Luxe</p>
            </div>
            <div className=" space-y-9 text-lg text-yellow-600">
                <h5 className="relative font-bold cursor-pointer text-2xl">COMMUNITY</h5>
                <p className="relative cursor-pointer">Accessibility</p>
                <p className="relative cursor-pointer">This is not a real site!</p>
                <p className="relative cursor-pointer">Its a Great Clone App!</p>
                <p className="relative cursor-pointer">Referrals Accepted</p>
                <p className="relative cursor-pointer">Hussein's-Airbnb-Clone</p>
            </div>
            
            <div className=" space-y-9 text-xl text-yellow-600">
                <h5 className="relative font-bold cursor-pointer text-2xl">HOST</h5>
                <p className="relative cursor-pointer">Hussein The Dev.</p>
                <p className="relative cursor-pointer">Presents</p>
                <p className="relative cursor-pointer">React App Projects</p>
                <p className="relative cursor-pointer">Full Time Code</p>
                <p className="relative cursor-pointer">Send me a Feedback</p>
                </div>
                <div className=" space-y-9 text-xl text-yellow-600">
                <h5 className="relative font-bold cursor-pointer text-2xl">Support</h5>
                <p className="relative cursor-pointer">Help Center</p>
                <p className="relative cursor-pointer">Trust & Safety</p>
                <p className="relative cursor-pointer">Say Hi to New World</p>
                <p className="relative cursor-pointer">Easter Eggs</p>
                <p className="relative cursor-pointer">For the Future</p>
                </div>
        </div>
        
           
        </section>
    )
}

export default Footer
