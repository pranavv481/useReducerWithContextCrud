export const ContactReducer = (state, action) =>{
   switch(action.type){
       case 'ADD_CONTACT':
           return [...state, action.newContact]
       case 'REMOVE_CONTACT':
        if(window.confirm("Are you really want to delete this no?")){
            const filtered = state.filter(data=>data.id!==action.id) 
            return filtered;   
        }    
        default:
            return state;
   }
}