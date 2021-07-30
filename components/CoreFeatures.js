import { AnnotationIcon, PaperClipIcon, PresentationChartLineIcon, CalendarIcon, DeviceMobileIcon, CreditCardIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Payment processing',
        icon: CreditCardIcon,
    },
    {
        name: 'Live conferencing',
        icon: DeviceMobileIcon,
    },
    {
        name: 'Calender & Event management',
        icon: CalendarIcon,
    },
    {
        name: 'Student management',
        icon: PresentationChartLineIcon,
    },
    {
        name: 'Content library',
        icon: PaperClipIcon,
    },
    {
        name: 'Integrated messaging platform',
        icon: AnnotationIcon,
    },
]

export default function CoreFeatures() {

    return (
        <div className="flex flex-col md:h-screen md:flex-row py-10 md:px-20 bg-white">

            <div className="flex h-96 md:h-auto py-10 w-full md:w-1/2 justify-center items-center">
                <img src="/cards.gif" alt="app" className=" h-full w-4/6 object-contain"/>
            </div>


            <div className="flex flex-col md:w-1/2 mx-auto px-5 justify-center">
                <div className="">
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl ">
                       Everything you need to run online classes efficiently
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-gray-900 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-12 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                            </div>
                        ))}   
                    </dl>
                </div>


            </div>


        </div>
    )
}
