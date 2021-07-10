import React from 'react'



const ContextApi= React.createContext()
const UserProvider= ContextApi.Provider
const UserConsumer= ContextApi.Consumer


export {UserProvider, UserConsumer}

export default ContextApi