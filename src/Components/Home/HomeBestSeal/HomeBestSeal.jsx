import React from 'react';
import bookImg from '@/public/banner 07.png';
import banner from '@/public/lgbanner2.jpg';
import Link from 'next/link';
import Image from 'next/image';

const HomeBestSeal = () => {
     const bestSeal = [
         {
        id:0,
        category: "story books",
        name:"story books 1",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:1,
        category: "story books",
        name:"story books 2",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:2,
        category: "story books",
        name:"story books 3",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:3,
        category: "story books",
        name:"story books 4",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:4,
        category: "story books",
        name:"story books 5",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:5,
        category: "story books",
        name:"story books 6",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:7,
        category: "story books7",
        name:"story books 5",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
         {
        id:8,
        category: "story books7",
        name:"story books 5",
        price:200,
        quantity:1,
        discountPercentage:"",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language:"english",
        lavel: "",
        cover: bookImg,
        features:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author:"shahin",
        coupon: [
            "",
            ""
        ],
        image:[
            "",
            "",
            ""
        ]
    },
    ]
    return (
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
                  {
                    bestSeal?.map(book => (
                           <Link href={`/product/${book?.id}`}>
                                <div className="card bg-white px-3 pt-2 pb-[30px]  shadow-lg hover rounded">
                                <div className="bg-[#e1e6e9]  ">
                                    <Image 
                                    src={book?.cover}
                                    width={400}
                                    height={600}
                                    alt="Description"
                                    className='md:h-[360px] h-[180px] rounded'
                                    />
                                </div>

                                    <div className="">
                                        <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                                        <h4 className="text-xl font-semibold text-[#3aafbf]">${book?.price}</h4>
                                    </div>
                                </div>
                            </Link>
                    ))
                  }
               </div>
    );
};

export default HomeBestSeal;