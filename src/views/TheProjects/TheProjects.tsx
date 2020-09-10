import React, { useEffect, useState } from 'react'
import { getRepos } from './../../API/github-api';
import ReposCard from '../../components/ReposCard';
interface Props {

}

const TheProjects = (props: Props) => {
    // my username on github
    const username = "zverbikadam";

    // state
    const [data, setData] = useState([]);

    // first time render effect
    useEffect(() => {
        getData(username)
            // TODO add loading functionality
            .then(result => setData(result.reposData))
            .catch(error => console.log(error));
    }, [getData])

    /**
     * 
     * @param query query string to search on github
     * in this case search query === username
     * @description AXIOS call
     */
    async function getData(query: string) {
        let reposData = await getRepos(query).then(result => result.map((repo: any) => extractRepo(repo)));
        return { reposData };
    }

    /**
     * 
     * @param param0 
     * Destructuring repository from github
     */
    const extractRepo = ({ name, description, html_url: html }: any) => {
        return { name, description, html }
    }

    return (
        <div>
            {data.map((repo: any, index: number) => (
                <ReposCard key={index} repo={repo} />
            ))}
        </div>
    )
}

export default TheProjects
