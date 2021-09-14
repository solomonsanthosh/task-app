import TaskCard from './components/TaskCard';
import React from 'react';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
const App = () => {
	const { list } = useSelector((state) => ({...state}))
   const handleClick = () => {
      document.querySelector('.display').style.display='block'   
   }
	return (
      <>	
         <Modal></Modal>
			<div className='card-container'>
			{list.map((l)=> (
				<TaskCard list={l} ></TaskCard>
				)
				)}
			</div>

			<span>
				<svg
            onClick={handleClick}
            style={{width: '50px',height: '50px',position:'absolute',right:'0',bottom:'0',margin:'30px'}}
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
			</span>
		</>
	);
};

export default App;
