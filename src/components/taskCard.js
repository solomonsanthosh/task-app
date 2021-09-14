import React , {useState}from 'react';
import '../index.css';
import { useSelector,useDispatch } from 'react-redux';
const TaskCard = (props) => {
   const dispatch = useDispatch()
   const [task, setTask] = useState('')
	const handleSubmit = (e) => {
      e.preventDefault();

		dispatch({
         type: 'ADD_TASK',
         payload: {
            title:props.list.title,
            task: {title:task}
         }
      })
	};
	return (
		<>
			<div className='card'>

				<div>{props.list.title}</div>
            <div className='popup-wrap'>
				<form action='' className='popup2'>
					<input
						type='text'
						value={task}
						onChange={(e) => (setTask(e.target.value))}
						placeholder='New Task'
						id=''
					/>
					<button className='addbtn' onClick={handleSubmit}>
						<span>
							<svg
								style={{ width: '30px', height: '30px' }}
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
					</button>
				</form>
            </div>
			</div>
		</>
	);
};

export default TaskCard;
