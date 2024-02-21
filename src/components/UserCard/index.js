import React, { useEffect, useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function UserCard({user = {}}) {
	const [userData, setUserData] = useState({})
	const navigate = useNavigate()

	useEffect(()=>{
		fetch(`${user.url}`, {
			method:'get'
		})
		.then(response => response.json())
		.then(data => setUserData(data))
		.catch(err => console.log(err))
	},[])

	return (
		<div className='user_card_main'>
			<img src={userData.avatar_url} alt=''/>
			<button onClick={() => navigate(`/aquera/user/${user?.login}`)}>
				<h3>
					{userData?.name || "No Name"}
				</h3>
			</button>
		</div>
	)
}

export default UserCard