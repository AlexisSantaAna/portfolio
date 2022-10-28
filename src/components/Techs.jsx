import React from 'react'

const Techs = () => {
    const techs = ["HTML", "CSS", "Bootstrap", "Javascript", "React.js", "React Native", "Expo", "Redux", "Node.js", "Next.js", "GIT", "GitHub", "Firebase", "SQL", "SQLite", "Rest API"]

    return (
        <>
            {
                techs.map((tech, index) => (
                    <div key={index + 1000} className='container-icon d-flex flex-column justify-content-center align-items-center'>
                        <img src={`./assets/ic${index + 1}.png`} className='icon' alt={tech} />
                        <p>{tech}</p>
                    </div>
                ))}

        </>
    )
}

export default Techs