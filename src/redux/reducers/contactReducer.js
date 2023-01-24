import { addDataAxios,updateDataAxios, getDataAxios,deleteDataAxios} from "./data";
 const initialState = [

 
];
// import { addData } from "./data";
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      // console.log(state, "state");
      // console.log(action.payload,"action.payload");
      state = [...state, action.payload];
      // console.log(state, "state222");
      addDataAxios(action.payload);
      return state;
      case "GET_CONTACT":
        const getContacts = getDataAxios();
        state = getContacts;
        return state
    case "DELETE_CONTACT":
      const filterContacts = state.filter(contact =>contact.id !== action.payload && contact);
      state = filterContacts;
      deleteDataAxios(action.payload);
      console.log(action.payload ,"action.payload");
      console.log(action .id,"action");

      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
          
      );
      state = contactUpdate;
      console.log(contactUpdate,"contactUpdate");
      updateDataAxios(action.payload.id, action.payload)
      return state;
 
  }
};
