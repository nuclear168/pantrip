import React from 'react'

const Footer = () => {

    const support = [
        'Help Center',
        'AirCover',
        'Anti - discrimination',
        'Disability support',
        'Cancellation options',
        'Report neighborhood concern'
    ]

    const hosting = [
        'Airbnb your home',
        'AirCover for Hosts',
        'Hosting resources',
        'Community forum',
        'Hosting responsibly',
        'Airbnb - friendly apartments',
        'Join a free Hosting class',
    ]

    const airbnb = [
        'Newsroom',
        'New features',
        'Careers',
        'Investors',
        'Gift cards',
        'Airbnb.org emergency stays',
    ]


    const mapSupport = support.map((detail) => {
        return (
            <>
                {detail}<br /><br />
            </>
        )
    })


    const mapHosting = hosting.map((detail) => {
        return (
            <>
                {detail}<br /><br />
            </>
        )
    })


    const mapAirbnb = airbnb.map((detail) => {
        return (
            <>
                {detail}<br /><br />
            </>
        )
    })

    return (
        <>
            <div className='flex pt-5'>
                <div className='w-1/2 sm:px-6 lg:px-8 text-[12px]'>
                    <h2 className='font-bold'>Support</h2>
                    <br />
                    {mapSupport}
                </div>
                <div className="w-1/2 sm:px-6 lg:px-8 text-[12px]">
                    <h2 className='font-bold'>Hosting</h2>
                    <br />
                    {mapHosting}
                </div>
                <div className='w-1/6 sm:px-6 lg:px-8 text-[12px]'>
                    <h2 className='font-bold'>Airbnb</h2>
                    <br />
                    {mapAirbnb}
                </div>
            </div>
            <hr />
            <div className='py-2 px-8'>
                <h3 className='text-[12px]'>© 2024 Internet Marketing co., ltd</h3>
            </div>
        </>
    )
}

export default Footer