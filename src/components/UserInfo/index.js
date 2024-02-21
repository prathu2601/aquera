import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import XIcon from '@mui/icons-material/X';

import './styles.css'

function UserInfo({ user, show = true }) {
	const formatNumber = (n) => {
		if (n < 1e3) return n;
		if (n >= 1e3 && n < 1e6) return + (n / 1e3).toFixed(1) + "K";
		if (n >= 1e6) return + (n / 1e6).toFixed(1) + "M";
	};

	return (
		<>
			<h1>
				{user?.name || "No Name"}
			</h1>
			<div className='bio' style={{ marginLeft: "5px" }}>
				{user?.login || "No Name"}
			</div>
			<div className='bio' style={{ marginLeft: "5px" }}>
				{user?.bio}
			</div>
			<div className='followers'>
				{user?.followers && <PeopleIcon />}
				<span>
					{formatNumber(user?.followers)}
				</span>
				followers
				<span>
					{formatNumber(user?.following)}
				</span>
				following
			</div>
			{show && <>
				<div className='flex'>
					{user?.location && <PlaceIcon />}
					{user?.location}
				</div>
				<div className='flex'>
					{user?.company && <BusinessIcon />}
					{user?.company}
				</div>
				<div className='flex'>
					{user?.email && <EmailIcon />}
					{user?.email}
				</div>
				<div className='flex'>
					{user?.blog && <LanguageIcon />}
					{user?.blog}
				</div>
				<div className='flex'>
					{user?.twitter_username && <XIcon />}
					{user?.twitter_username}
				</div> 
			</>}
		</>
	)
}

export default UserInfo