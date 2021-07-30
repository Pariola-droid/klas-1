/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, DesktopComputerIcon, DatabaseIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Seamlessly integrated third-party tools ',
        description:
            'We integrate with all your favourite tools like Zoom, Calendly, Slack, etc to enhance the teaching experience.',
        icon: GlobeAltIcon,
    },
    {
        name: `Advanced Instructor's dashbord`,
        description:
            'Track your bookings, earnings and engagements, manage your classes and optimize the performance of your classes.',
        icon: DesktopComputerIcon,
    },
    {
        name: 'Secure online payments',
        description:
            'Accept payments online with Paystack or Stripe. Klas only supports NGN and USD for now, but we plan to support more currencies as we expand globally.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Access to our community & resources',
        description:
            'Connect with other instructors in our community and access valuable resources to help you host engaging online classes.',
        icon: DatabaseIcon,
    },
]

export default function Features() {
    return (
        <div className="py-10 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
                <div className="lg:text-center">
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to monetize your knowledge
                    </p>
                    <p className="mt-4 max-w-2xl text-base text-gray-900 lg:mx-auto">
                        Start monetizing your knowledge while also impacting lives of many adding value to their growth, for anyone across the globe.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-semibold text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-900">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
