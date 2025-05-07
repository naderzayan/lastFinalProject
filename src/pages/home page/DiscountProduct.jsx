import React from 'react'

export default function DiscountProduct({image,title,Category,beforPrice,afterPrice}) {
    return (
        <main>
            <div className="DiscountOfProduct">
                <img src={image} />
                <p>{title}</p>
                <p>{Category}</p>
                <p>
                    {<del>{beforPrice}</del>} {afterPrice}
                </p>
            </div>
            <div className="DiscountOfProduct">
                <img src={image} />
                <p>{title}</p>
                <p>{Category}</p>
                <p>
                    {<del>{beforPrice}</del>} {afterPrice}
                </p>
            </div>
        </main>
    );
}
