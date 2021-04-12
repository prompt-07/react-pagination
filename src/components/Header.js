
const Header = ({setPostsPerPage}) => {
    
    return (
        <div className='container'>
            <h1 className='text-primary mb-3'> My Blog</h1>
            <input type='number' 
            placeholder='No of Posts per page #10'
            onChange={  (e) => ( e.target.value > 0 ? setPostsPerPage(parseInt(e.target.value)): setPostsPerPage(10) )}/>
        </div>
    )
}

export default Header
