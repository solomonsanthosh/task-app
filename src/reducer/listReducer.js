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

               var foundList = {
                  
                  title: action.payload.title,
                  task:[...selectedList[0].task,action.payload.task]
               }
               return [...remainingList,foundList]
            }else {
               var foundList = {
                  
                  title: action.payload.title,
                  task:[action.payload.task]
               }
               return [...remainingList,foundList]

            }
      default:
         return state;
   }
            
}