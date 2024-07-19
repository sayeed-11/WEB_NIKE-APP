import React from 'react'

const FeatureContent = ({ height }) => {
    return (
        <div className={`bg-white w-screen absolute top-[56px] ${height ? "h-auto lg:h-[350px]" : "h-0"} hidden left-0 transition-all overflow-hidden md:grid grid-cols-3 lg:grid-cols-5 font-nike max-w-[1350px] text-black`}>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>New</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>New Arrivals</button></li>
                    <li><button>Latest Shoes</button></li>
                    <li><button>Latest Clothing</button></li>
                    <li><button>SNKRS Launch Calendar</button></li>
                    <li><button>Get ‘Em in SNKRS</button></li>
                    <li><button>Customise with Nike By You</button></li>
                    <li><button>Bestsellers</button></li>
                    <li><button>Member Exclusive</button></li>
                </ul>
            </div>
            <div  className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Shop Icon</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Air Force 1</button></li>
                    <li><button>Air Jordan 1</button></li>
                    <li><button>Air Max</button></li>
                    <li><button>Dunk</button></li>
                    <li><button>Cortez</button></li>
                    <li><button>Blazer</button></li>
                    <li><button>Pegasus</button></li>
                </ul>
            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>New For Men</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Shoes</button></li>
                    <li><button>Clothing</button></li>
                    <li><button>Accessories</button></li>
                    <li><button>Shop All New</button></li>
                </ul>
            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>New For Women</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Shoes</button></li>
                    <li><button>Clothing</button></li>
                    <li><button>Accessories</button></li>
                    <li><button>Shop All New</button></li>
                </ul>
            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>New For Kids</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Shoes</button></li>
                    <li><button>Clothing</button></li>
                    <li><button>Accessories</button></li>
                    <li><button>Shop All New</button></li>
                </ul>
            </div>
        </div>
    )
}

export default FeatureContent