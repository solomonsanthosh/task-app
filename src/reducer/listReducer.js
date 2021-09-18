export const listReducer = (state =[],action) => {
   switch(action.type) {
      case 'ADD_LIST':
         return [...state,action.payload];
      case 'ADD_TASK':
            const remainingList = state.filter((l)=>{
               return l.title !== action.payload.title
            })
            const selectedList = state.filter((l)=> {
               return l.title === action.payload.title
            })
            
            console.log(action.payload.title);
            if (selectedList[0].task) {

               let foundList = {
                  
                  title: action.payload.title,
                  task:[...selectedList[0].task,action.payload.task],
                  // unfinished: [...selectedList[0].task,action.payload.task],
               }
               return [foundList,...remainingList]
            }else {
               let foundList = {
                  
                  title: action.payload.title,
                  task:[action.payload.task]
               }
               return [foundList,...remainingList]

            }
      case 'EDIT_TASK':
         
         const remaininList = state.filter((l)=>{
            return l.title !== action.payload.title
         })
         let selectedLists = state.filter((l)=>{
            return l.title === action.payload.title
         })
         
         
         const remainingTask = selectedLists[0].task.filter((task)=>
         task.title !== action.payload.task.title
         )
         let selectedTask = selectedLists[0].task.filter((task)=>
         task.title === action.payload.task.title
         )
         // selectedTask.details = action.payload.task.details;
         const foundList = {
            
            title: action.payload.title,
            task: [action.payload.task,...remainingTask],


         }
      
      
         return [foundList,...remaininList]
         
         case 'EDIT_FINISH':
            const remaininlist = state.filter((l)=>{
               return l.title !== action.payload.title
            })
            let selectedlists = state.filter((l)=>{
               return l.title === action.payload.title
            })
            
            
            const remainingtask = selectedlists[0].task.filter((task)=>
            task.title !== action.payload.task.title
            )
            let selectedtask = selectedlists[0].task.filter((task)=>
            task.title === action.payload.task.title
            )
            // selectedTask.details = action.payload.task.details;
            const foundlist = {
               
               title: action.payload.title,
               task: [action.payload.task,...remainingtask],
   
   
            }
            
            return [foundlist,...remaininlist]
         


      default:
         return state;
   }
            
}