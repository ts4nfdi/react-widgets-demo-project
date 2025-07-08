'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const MainPage = dynamic(() => import('./MainPage'), { ssr: false });

export default function ClientWrapper( { widgetData }: { widgetData: any } ) {
    return <MainPage widgetData={widgetData} />;
}