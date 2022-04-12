import React from 'react'

export interface IRepositoryProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export default function RepositoryItem ({ repository }: IRepositoryProps) {

    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar repositório</a>
        </li>
    )
}