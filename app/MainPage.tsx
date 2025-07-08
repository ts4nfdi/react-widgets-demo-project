'use client'

import React from 'react'
import {WidgetPage} from "./WidgetPage";

export default function MainPage({ widgetData }: { widgetData: any }) {
    return (
        <WidgetPage widgetData={widgetData}/>
    );
}

