import React, { useEffect, useState } from "react";
import { getRepos } from "./../../API/github-api";
import ReposCard from "../../components/ReposCard/ReposCard";
import { useLanguage } from "../../Context/LanguageContext";

interface Props {}

const TheProjects = (props: Props) => {
  // my username on github
  const username = "zverbikadam";

  // state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const enLanguage = useLanguage();

  const header_text = enLanguage
    ? "These projects are public repositories from my github account. They are accessed through github API."
    : "Toto sú verejné repozitáre na mojom github účte. Získavané sú cez github API.";

  const error_message = enLanguage
    ? "Loading data from github API failed. Either check your connection, or try again later."
    : "Načítanie dát z github API zlyhalo. Skontrolujte svoje pripojenie, alebo to skúste znovu neskôr.";

  // first time render effect
  useEffect(() => {
    /**
     *
     * @param query query string to search on github
     * in this case search query === username
     * @description AXIOS call
     */
    async function getData(query: string) {
      let reposData = await getRepos(query).then((result) =>
        result.map((repo: any) => extractRepo(repo))
      );
      return { reposData };
    }
    // TODO add loading functionality
    getData(username)
      .then((result) => {
        setData(result.reposData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(`${error.message}:\n${error_message}`);
        setIsLoading(false);
      });
  }, [error_message]);

  /**
   *
   * @param param0
   * Destructuring repository from github
   */
  const extractRepo = ({ name, description, html_url: html }: any) => {
    return { name, description, html };
  };

  return (
    <>
      <header>{header_text}</header>
      {isLoading ? (
        <h1 className="is-loading">...Loading...</h1>
      ) : (
        <div className="repos-container">
          {data.map((repo: any, index: number) => (
            <ReposCard key={index} repo={repo} />
          ))}
        </div>
      )}
    </>
  );
};

export default TheProjects;
