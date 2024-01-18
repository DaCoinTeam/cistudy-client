"use client"
import { Open_Sans } from "next/font/google"
import React from "react"
import { Navbar, Footer } from "./_components"
import { useSelector } from "react-redux"
import {  RootState } from "@redux"
import { NextUIProvider } from "@nextui-org/react"
import { ToastContainer } from "react-toastify"
import "./_css/ReactToastify.css"
import { IconContext } from "react-icons"
import { ContextProps } from "./_shared"

export const font = Open_Sans({ weight: "400", subsets: ["latin"] })

const WrappedRootLayout = (props: ContextProps) => {

    const darkMode = useSelector(
        (state: RootState) => state.configuration.darkMode
    )
    return (
        <html lang="en" className={darkMode ? "dark" : "light"}>
            <body className={font.className}>
                <NextUIProvider>
                    <IconContext.Provider value={{ className: "w-5 h-5" }}>
                        <main className="flex flex-col min-h-screen">
                            <Navbar />
                            <section className="flex-1">
                                {props.children}
                            </section>
                            <Footer />
                            <ToastContainer
                                position="top-right"
                                autoClose={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                            />
                        </main>
                    </IconContext.Provider>
                </NextUIProvider>
            </body>
        </html>
    )
}
export default WrappedRootLayout


