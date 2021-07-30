import { DotsVerticalIcon, LightBulbIcon, } from '@heroicons/react/outline'
import ButtonBlack from '../components/ButtonBlack';


const features = [
    {
        name: 'Plan and create your class.',
        icon: DotsVerticalIcon,
    },
    {
        name: 'Share the link to your class and get bookings instantly.',
        icon: DotsVerticalIcon,
    },
    {
        name: 'Host a great online class.',
        icon: DotsVerticalIcon,
    },
]


export default function About() {
    return (
        <div className="flex flex-col-reverse md:h-screen md:flex-row py-10 md:px-20 bg-white">

            <div className="flex flex-col md:w-1/2 mx-auto px-5 justify-center">
                <div className="">
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl ">
                        How it works
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-6 w-6 rounded-md bg-gray-900 text-white">
                                        <feature.icon className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <p className="ml-10 text-lg leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                            </div>
                        ))}                        
                    </dl>
                </div>

                <div className="invisible md:visible md:mt-16">
                    <ButtonBlack title="Learn more" />
                </div>

            </div>


            <div className="flex h-96 w-0 h-0 md:h-auto md:py-10 w-full md:w-1/2 justify-center items-center">
                <img src="/f3.png" alt="app" className=" h-full w-4/6 object-contain"/>
            </div>

        </div>
    )
}
