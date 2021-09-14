export const taskReducer = (state =['eat','yoga'],action) => {
   switch(action.type) {
      case 'ADD_TASK':
         return [...state,action.payload];
      default:
         return state;
   }
            
}