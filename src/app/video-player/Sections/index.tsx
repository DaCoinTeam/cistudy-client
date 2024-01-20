"use client"
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react"
import React from "react"
import Section from "./Lecture"
import Lecture from "./Lecture"

interface SectionsProps {
  className?: string;
}

const Sections = (props: SectionsProps) => {
    return (

        <div className={props.className}>
            <Accordion>
                <AccordionItem title="Section 1: ReactJs" classNames={{
                    title: "text-base font-bold"
                }}>
                    <Lecture/>
                    <Lecture/>
                </AccordionItem>
                <AccordionItem title="Section 1: ReactJs" classNames={{
                    title: "text-base font-bold"
                }}>
                    <Lecture/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sections
