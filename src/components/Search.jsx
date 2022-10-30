import { useState, useEffect } from 'react'

import { Subtitle } from './Subtitle'
import { Text } from './Text'
import { Link } from './Link'

import { BsArrowReturnRight } from 'react-icons/bs'
import axios from 'axios'

export const Search = () => {
  const [repositories, setRepositories] = useState([])
  const [search, setSearch] = useState('')
  const [reposFiltered, setReposFiltered] = useState([])

  const baseURL = 'https://api.github.com/users/simaraconceicao/repos'

  useEffect(() => {
    async function getData(){
      const response = await axios.get(baseURL)
      setRepositories(response.data)
    }
    getData()
  },[])

  useEffect(() => {
    setReposFiltered(repositories.filter(item => {
      return item.name.includes(search)
    }))
  },[search, repositories])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return(
    <>
      <div className="main">
          <input onChange={handleSearch} placeholder="digite um repo" />
          <div className="card-container" >
            {reposFiltered.map(repo=>
              <div className="card">
                <Subtitle key={repo.id} text={repo.name} />
                <Text paragraph={repo.description} />
                <Link url={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                  Conferir <BsArrowReturnRight size={16} color="#fff"/>
                </Link>
              </div>
            )}
          </div>
      </div>
    </>
  )
}
