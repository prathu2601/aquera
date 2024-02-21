import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles.css'
import UserInfo from '../UserInfo'

function ProfilePage() {
	const [user, setUser] = useState({})
	const navigate = useNavigate()
	const { user_id } = useParams()

	useEffect(() => {
		fetch(`https://api.github.com/users/${user_id}`)
			.then(response => response.json())
			.then(data => setUser(data))
			.catch(err => console.log(err))
	}, [])

	if(Object.keys(user).length === 0){
		return (
			<div className='loading'>
				...loading
			</div>
		)
	}

	return (
		<div className='profile_main'>
			<button
				className='all_users'
				onClick={() => navigate('/')}
			>
				View All Users
			</button>
			<div className='profile_container'>
				<div className='user_img'>
					<img src={user?.avatar_url} alt='' />
				</div>
				<div className='user_info'>
					<UserInfo user={user}/>
				</div>
			</div>
			<div className='repos_sec'>
				<button
					onClick={()=>navigate(`/aquera/user/repos/${user_id}`)}
				>
					View All Repositories ({user.public_repos})
				</button>
			</div>
		</div>
	)	
}

export default ProfilePage