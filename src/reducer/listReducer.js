export const listReducer = (state =['todo','important'],action) => {
   switch(action.type) {
      case 'ADD_LIST':
         return [...state,action.payload];
      default:
         return state;
   }
            
}