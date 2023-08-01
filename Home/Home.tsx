import React from 'react'
import { English } from './En.js'
import { Portuguese } from './pt-BR.js'

let LanguageHtml = document.querySelector("#language")

let Languagenavigator = window.navigator.language

export function Home() {
    if (Languagenavigator == "en" || Languagenavigator == "en-US") {

        LanguageHtml?.setAttribute("lang", "en-us")

        return (
            <>
                <English />
            </>
        )
    }
    else if (Languagenavigator == "pt-BR" || Languagenavigator == "pt") {

        LanguageHtml?.setAttribute("lang", "pt-BR")

        return (
            <>
                <Portuguese />
            </>
        )
    }else if(Languagenavigator !== "pt-BR" && Languagenavigator !== "pt" && Languagenavigator !== "en" && Languagenavigator !=="en-US" ) {
        LanguageHtml?.setAttribute("lang", "en-us")

        return (
            <>
                <English />
            </>
        )
    }

}