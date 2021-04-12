import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Posts from './components/Posts'
import Pagination from './components/Pagination'

function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  // make our request an way to use axios
  useEffect( () => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice( indexOfFirstPost, indexOfLastPost)
  
  // Change page
  const paginateFun = (pgNumber) => {
    setCurrentPage(pgNumber)
  }

  return (
    <div className="container mt-5">
      <Header
      setPostsPerPage={setPostsPerPage}/>
      <Posts posts= {currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} 
      totalPosts={posts.length}
      paginate={ paginateFun }/>
    </div>
  );
}

export default App;
