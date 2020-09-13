import React from 'react'

const Card = ({id,name,email}) => {
	const imageUrl = `https://robohash.org/${id}?200*200`;
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={imageUrl} alt="robo_photo"/>
			<div>
				<h4>{name}</h4>
				<h5>{email}</h5>
			</div>
		</div>
	);
}
export default Card