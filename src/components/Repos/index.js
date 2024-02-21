import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'
import UserInfo from '../UserInfo';
import Repo from '../Repo';
import { Pagination } from '@mui/material';

function Repos() {
	const [user, setUser] = useState({})
	const [repos, setRepos] = useState([])
	const [page, setPage] = useState(1)
	const navigate = useNavigate()
	const { user_id } = useParams()

	const onPageChange = (event, value) => {
		setPage(value)
	}

	useEffect(() => {
		fetch(`https://api.github.com/users/${user_id}`)
			.then(response => response.json())
			.then(data => setUser(data))
			.catch(err => console.log(err))
	}, [])
		
	useEffect(()=>{
		fetch(`https://api.github.com/users/${user_id}/repos?page=${page}&per_page=10`)
			.then(response => response.json())
			.then(data => setRepos(data))
			.catch(err => console.log(err))
	},[page])

	if (Object.keys(user).length === 0) {
		return (
			<div className='loading'>
				...loading
			</div>
		)
	}

	return (
		<div className='repos_main'>
			<button
				className='all_users'
				onClick={() => navigate('/')}
			>
				View All Users
			</button>
			<div className='repos_container'>
				<div className='profile_section'>
					<div className='user_repo_img'>
						<img src={user?.avatar_url} alt='' />
					</div>
					<div className='user_log'>
						<UserInfo user={user} show={false}/>
					</div>
				</div>
				<div className='repos_main_container'>
					<div className='repos_section'>
						{(repos || [])?.map((repo)=>(
							<Repo 
								key={repo.id} 
								repo={repo}
							/>
						))}
					</div>
					<div className='pagination'>
						<Pagination 
							count={Math.ceil(user?.public_repos/10)} 
							page={page}
							onChange={onPageChange}
							variant="outlined" 
							color="primary"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Repos