import React from 'react'

const Techs = () => {
    const techs = ["HTML", "CSS", "Bootstrap", "Javascript", "React.js", "React Native", "Node.js", "Next.js", "GIT", "GitHub", "Firebase", "SQL", "Rest API"]

    return (
        <>
            {
                techs.map((tech, index) => (
                    <>
                    <div className='container-icon d-flex flex-column justify-content-center align-items-center'>
                        <img src={`./assets/ic${index + 1}.png`} className='icon' alt={tech} />
                        <p>{tech}</p>
                    </div>
                    </>
                ))}

        </>
    )
}

export default Techs