import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import './styles.css'

function Repo({repo = {}}) {
	return (
    	<div className='repo_main'>
			<div className='repo_container'>
				<div className='repo_name'>
					{repo?.name}
				</div>
				<div className='repo_description'>
					{repo?.description}
				</div>
				<div className='repo_topics'>
					{(repo?.topics || [])?.map((topic)=>(
						<div className='topic' key={topic}>
							<CircleIcon sx={{ fontSize: 15 }} />
							{topic}
						</div>
					))}
				</div>
			</div>
		</div>
    )
}

export default Repo