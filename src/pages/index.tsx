import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

export default function Home (): React.ReactNode {
  return (
    <>
      <div className={'h-full bg-light-gray'}>
        <div
          className={'flex h-full w-full flex-row items-center justify-center'}
        >
          <div
            className={
              'm-10 flex max-w-[30vh] flex-col items-center gap-5 rounded-2xl bg-white p-4 text-center'
            }
          >
            <div>
              <img src={'img/image-qr-code.png'} className={'rounded-2xl'} />
            </div>
            <div className={'inline-block px-2 text-base font-bold'}>
              Improve your front-end skills by building projects
            </div>
            <div
              className={
                'inline-block px-4 pb-6 text-xs font-bold text-grayish-blue'
              }
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
