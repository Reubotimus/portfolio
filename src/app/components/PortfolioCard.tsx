import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PortfolioCardInfo from './PortfolioCardInfoClass'

function PortfolioCard(portInfo: PortfolioCardInfo) {
  return (
    <div className="card w-full max-w-lg bg-base-100">
      <Link href={portInfo.linkPath}>
        <figure className='rounded-t-lg'><Image src={portInfo.imagePath} width={1920} height={1080} alt={portInfo.imageAlt}></Image></figure>
      </Link>
      <div className="card-body border-solid border-2 rounded-b-lg border-gray-600">
        <Link href={portInfo.linkPath}>
          <h2 className="card-title font-mono">
            {portInfo.title}
          </h2>
        </Link>
        <p>{portInfo.description}</p>
        <div className="card-actions justify-end pt-1">
          { portInfo.tags.map((item, index) => { return <div key={index} className="badge badge-outline border-gray-600">{item.tagName}</div> } ) }
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
