import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'

const url_repositories = "https://api.github.com/orgs/rocketseat/repos"

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export default function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch(url_repositories)
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {
                    repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)
                }
            </ul>
        </section>
    )
}