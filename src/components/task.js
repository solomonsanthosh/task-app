import React from 'react';
import '../index.css';
const Task = ({handleFinish,handleMore,handlEdit,t,more,color}) => {
   console.log(handlEdit);
	return (
		<>
			<div className='task'>
				<svg
               className={color}
					onClick={() => handleFinish(t)}
               
					style={{
						height: '20px',
						width: '20px',
						position: 'absolute',
						left: '15%',
						marginTop: '2px',
					
					}}
					xmlns='http://www.w3.org/2000/svg'
				
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
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
				<span >
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
                  onClick={() => handlEdit(t)}
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
					<div>
						<div className='details'>Description: {t.details}</div>
						<div>Date: {t.date}</div>
					</div>
				) : null}
				{/* {more.length && more === t.title ? (
								<div style={{margin: '20px'}}>
									<DatePicker
										selected={startDate}
										onChange={(date) => {
											setStartDate(date)
											dispatch({
												type
											})
										}
									}
									/>
								</div>
							) : null} */}
			</div>
		</>
	);
};

export default Task;
