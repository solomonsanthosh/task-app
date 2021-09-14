import React, { useState } from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import EditTask from './EditTask';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TaskCard = (props) => {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState(new Date());
	const [ok, setOk] = useState(false);
	const [task, setTask] = useState('');
	const [taskTitle, setTaskTitle] = useState('');
	const [more, setMore] = useState('');
	const handleEdit = (t) => {
		setTaskTitle(t.title);
		setOk(true);
	};
	const handleMore = (t) => {
		setMore(t.title);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: 'ADD_TASK',
			payload: {
				title: props.list.title,
				task: { title: task },
			},
		});
	};
	return (
		<>
			{ok && <EditTask task={taskTitle} title={props.list.title} ok={setOk} />}
			<div className='card'>
				<div>{props.list.title}</div>

				{props.list.task &&
					props.list.task.map((t) => (
						<div className='task'>
							{t.title}

							<span>
								<svg
									style={{
										height: '20px',
										width: '20px',
										position: 'absolute',
										right: '25%',
										marginTop: '2px',
									}}
									onClick={() => handleMore(t)}
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
							<span onClick={() => handleEdit(t)}>
								<svg
									style={{
										height: '20px',
										width: '20px',
										position: 'absolute',
										right: '15%',
										paddingTop: '5px',
									}}
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
									/>
								</svg>
							</span>
							{more.length && more === t.title ? (
								<div className='details'>{t.details}</div>
							) : null}
							{more.length && more === t.title ? (
								<div style={{margin: '20px'}}>
									<DatePicker
										selected={startDate}
										onChange={(date) => setStartDate(date)}
									/>
								</div>
							) : null}
						</div>
					))}

				<div className='popup-wrap'>
					<form action='' className='popup2'>
						<input
							type='text'
							value={task}
							onChange={(e) => setTask(e.target.value)}
							placeholder='New Task'
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
