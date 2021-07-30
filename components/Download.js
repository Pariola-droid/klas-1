import ButtonBlack from '../components/ButtonBlack';


export default function Download() {
    return (
        <div className="flex flex-col w-full justify-center items-center md:py-20 px-5">
                <div className="">
                    <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                       Simple fair pricing.
                    </p>
                </div>

                <div className="">
                    <p className="text-black text-lg font-semibold text-center font-sans mt-5">
                        Klas only makes money when you do. We charge 5% + NGN 100 for paid classes.
                    </p>
                </div>

                <div className="mt-5 lg:mt-10 mb-10 flex-col justify-center items-center ">
                    <div className="py-3 flex flex-col md:flex-row justify-center">
                        <dd className="px-5 text-center text-base font-semibold">Unlimited Free Class</dd>
                        <dd className="px-5 text-center text-base font-semibold">Unlimited Paid Class</dd>
                        <dd className="px-5 text-center text-base font-semibold">Easy-to-use Dashboard</dd>
                        <dd className="px-5 text-center text-base font-semibold">Recurring classes</dd>
                    </div>
                    <div className="py-3 flex flex-col md:flex-row justify-center">
                        <dd className="px-5 text-center text-base font-semibold">Slack integration</dd>
                        <dd className="px-5 text-center text-base font-semibold">Cross-border transactions</dd>
                        <dd className="px-5 text-center text-base font-semibold">Zoom & Google meet integration</dd>
                        <dd className="px-5 text-center text-base font-semibold">Content library for ebooks, courses etc.</dd>
                    </div>
                    
                </div>

                <div className="mt-5 lg:mt-10 mb-20 flex justify-evenly items-center">
                    <p className="text-base text-center md:text-2xl font-semibold">Start monetizing your knowledge with Klas.</p>
                    <div className="px-5">
                        <ButtonBlack title="GET STARTED" />
                    </div>
                </div>
            </div>
    )
}
