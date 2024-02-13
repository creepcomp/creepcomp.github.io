import React from "react";
import { Alert } from "react-bootstrap";

const Repositories = () => {
    const [repositories, setRepositories] = React.useState([]);
    const [error, setError] = React.useState();

    React.useEffect(e => {
        fetch("https://api.github.com/users/creepcomp/repos").then(async r => {
            const data = await r.json();
            if (r.ok) {
                data.map(repository => {
                    fetch(repository.languages_url).then(r => r.json()).then(languages => {
                        repository.languages = languages;
                        setRepositories([...data]);
                    });
                });
            } else setError(data);
        });
    }, []);    

    return (
        <div dir="ltr">
            {error ? <Alert variant="danger">{error.message}</Alert>: null}
            {repositories.map((x, i) => (
                <div key={i} className="bg-primary bg-opacity-25 rounded w-100 m-1 p-2">
                    <i className={"fa-brands fa-github " + (document.dir == 'rtl' ? "float-start" : "float-end")} />
                    <div>
                        <a href={x.html_url}><h5>{x.name}</h5></a>
                        <p>{x.description}</p>
                    </div>
                    <div>
                        {x.languages ? Object.keys(x.languages).map((x, i) => (
                            <small key={i} className="bg-secondary rounded text-light m-1 p-1">{x}</small>
                        )): null}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories;
