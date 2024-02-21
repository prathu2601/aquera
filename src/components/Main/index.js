import React, { useEffect, useState } from 'react'
import './styles.css'
import UserCard from '../UserCard'

function Main() {
	const [users, setUsers] = useState([])
	
	useEffect(() => {
		fetch('https://api.github.com/users')
			.then(response => response.json())
			.then((data)=>{
				if(data.length !== 0)
					setUsers(data)
			})
			.catch(err => console.log(err))
	}, [])

	if(users.length === 0){
		return (
			<div className='loading'>
				...loading
			</div>
		)
	}
	
	return (
		<div className='main_section'>
			<div className='main_container'>
				{(users || [])?.map((user)=>(
					<UserCard 
						key={user.id}
						user={user}
					/>
				))}
			</div>
		</div>
	)
}

export default Main