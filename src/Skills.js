import React from "react"

const Skills = () => {
    const skills = [
        {
            name: "Back-End",
            items: [
                "Django",
                "FastAPI",
                "Flask"
            ]
        },
        {
            name: "Front-End",
            items: [
                "React",
                "Next",
                "Bootstrap",
                "Axios"
            ]
        },
        {
            name: "Database",
            items: [
                "PostgreSQL",
                "MongoDB",
                "SQLite"
            ]
        },
        {
            name: "Development Tools",
            items: [
                "Git",
                "Docker",
                "Webpack",
                "Jenkins"
            ]
        }
    ]

    return (
        <ul dir="ltr">
            {skills.map((x, i) =>
                <li key={i}>
                    {x.name}: 
                    <ul className="d-flex flex-wrap">
                        {x.items.map((x, i) => <span key={i} className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                    </ul>
                </li>
            )}
        </ul>
    )
}

export default Skills
