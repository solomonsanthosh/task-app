import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const Modal = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch()

const handleSubmit = (e) => {


   e.preventDefault()
	dispatch({
		type:'ADD_LIST',
		payload: {title:title}
	})
	document.querySelector('.display').style.display='none'   

}

	return (
      <div className='display'>
		<div className='popup-bg'>
			<form action='' className='popup'>
				<input
            
					type='text'
					value={title}
					onChange={(e) => (setTitle(e.target.value))}
               placeholder='New List'
					id=''
				/>
				<button className='addbtn' onClick={handleSubmit}><span>
				<svg
            
            style={{width: '40px',height: '40px'}}
					xmlns='http://www.w3.org/2000/svg'
					class='h-5 w-5'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fill-rule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
						clip-rule='evenodd'
					/>
				</svg>
			</span></button>
			</form>
		</div>
      </div>
	);
};

export default Modal;
