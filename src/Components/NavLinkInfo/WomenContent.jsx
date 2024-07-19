import React from 'react'

const WomenContent = ({ height }) => {
    return (
        <div className={`bg-white w-screen absolute top-[56px] hidden overflow-hidden ${height ? "h-auto lg:h-[400px]" : "h-0"} max-w-[1350px] left-0 transition-all md:grid grid-cols-3 lg:grid-cols-4 font-nike text-black`}>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Feature</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>New Releases</button></li>
                    <li><button>Bestsellers</button></li>
                    <li><button>Member Exclusive</button></li>
                    <li><button>Jordan</button></li>
                    <li><button>Lifestyle Running</button></li>
                    <li><button>Customise with Nike By You</button></li>
                    <li><button>Sale</button></li>
                    <li><button>Running Shoe Finder</button></li>
                    <li><button>Sustainable Materials</button></li>
                </ul>
            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Shoes</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>All Shoes</button></li>
                    <li><button>Newest Sneakers</button></li>
                    <li><button>Jordan</button></li>
                    <li><button>Lifestyle</button></li>
                    <li><button>Running</button></li>
                    <li><button>Gym and Training</button></li>
                    <li><button>Basketball</button></li>
                    <li><button>Football</button></li>
                    <li><button>Sandals and Slides</button></li>
                    <li><button>Last Sizes Available</button></li>
                </ul>
            </div>
            {/* <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Jordan</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>All Jordan</button></li>
                    <li><button>New Jordan</button></li>
                    <li><button>Jordan Shoes</button></li>
                    <li><button>Jordan Clothing</button></li>
                    <li><button>Jordan Basketball</button></li>
                    <li><button>Jordan Lifestyle</button></li>
                </ul>
            </div> */}
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Shop By Sport</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Running</button></li>
                    <li><button>Basketball</button></li>
                    <li><button>Football</button></li>
                    <li><button>Golf</button></li>
                    <li><button>Tennis</button></li>
                    <li><button>Gym and Training</button></li>
                    <li><button>Yoga</button></li>
                    <li><button>Skateboarding</button></li>
                </ul>
            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-lime-500'>Shop By Brand</h1>
                <ul className='text-sm space-y-2'>
                    <li><button>Nike Sportswear</button></li>
                    <li><button>NikeLab</button></li>
                    <li><button>Nike By You</button></li>
                    <li><button>Jordan</button></li>
                    <li><button>ACG</button></li>
                    <li><button>NBA</button></li>
                    <li><button>Nike SB</button></li>
                </ul>
            </div>
        </div>
    )
}

export default WomenContent