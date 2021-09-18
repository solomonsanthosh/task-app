import React, { useState, useEffect } from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import EditTask from './EditTask';
import Task from './task';
const TaskCard = (props) => {
	const dispatch = useDispatch();
	const [ok, setOk] = useState(false);
	const [finished, setFinished] = useState([]);
	const [unfinished, setUnFinished] = useState([]);

	const [task, setTask] = useState('');
	const [taskTitle, setTaskTitle] = useState('');
	const [more, setMore] = useState('');
	useEffect(() => {
		const finieshedFilter =
		props.list.task && props.list.task.filter((t) => t.finished === true);
		
		setFinished(finieshedFilter);
		const unfinieshedFilter =
			props.list.task && props.list.task.filter((t) => t.finished === false);
			
			setUnFinished(unfinieshedFilter);
		}, [props.list.task]);
		const handleFinish = (t) => {
			
			dispatch({
				type: 'EDIT_FINISH',
				payload: {
					title: props.list.title,
					task: {
						title: t.title,
						details: t.details,
						date: t.date,
						finished: true,
					},
				},
			});
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
					task: { title: task, finished: false },
				},
			});
		};
		const handleEdit = (t) => {
			setTaskTitle(t.title);
			setOk(true);
		};
		return (
			<>
			{ok && <EditTask task={taskTitle} title={props.list.title} ok={setOk} />}
			<div className='card'>
				<div>{props.list.title}</div>

				{unfinished.length ?
					unfinished.map((t) => (
						<Task
						color = 'redTick'
						handleMore={handleMore}
						handleFinish={handleFinish}
						handlEdit={handleEdit}
						t={t}
						more={more}
						/>
						)): null}

				{finished.length ? (
					<div>
						finished:
						{finished.map((t) => (
							<Task
						color = 'greenTick'

							handleSubmit={handleSubmit}
							handleMore={handleMore}
							handlFinish={handleFinish}
							handlEdit={handleEdit}
							t={t}
							more={more}
						/>
						) )}
					</div>
				) : null}

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
