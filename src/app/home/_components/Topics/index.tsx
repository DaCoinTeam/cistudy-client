import React from "react"
const TOPICS = [
    "ReactJS",
    "Java Spring Boot",
    "Python",
    "Althogrithm",
    "Communication Skill",
    "Dot Net",
    "Angular",
    "NextJS"
]

const Topics = () => {
    return (
        <div>
            <h3 className="text-2xl font-extrabold dark:text-white my-5">Recommended Topics For You </h3>
            <div className="grid grid-cols-4 my-5 gap-4">
                {TOPICS.map((item, index) => (
                    <div key={index} className="bg-gray-100 text-center	 text-gray-800 text-xl font-medium mx-2 px-5 py-2.5 border-slate-400 w-full rounded dark:bg-blue-900 dark:text-blue-300 my-1">{item}</div>

                ))}

            </div>
        </div>
    )
}
export default Topics