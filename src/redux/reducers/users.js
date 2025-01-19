const initialState = {
    users: [
        {
            name: "SimgaBBoy",
            klichka: "Krutoy",
            car: "Volga",
            age: 12345763,
            cake: "tort napoleon",
            id:1
        },
        {
            name: "PlohoyAHF",
            klichka: "Niger",
            car: "Vishna",
            age: -1,
            cake: "tort negr v pltnu",
            id:2
        }
    ],
    userCount: 2,
    avrRag: 123,
    cntSigma: 1
}

export default (state = initialState, action) => {
    switch (action.type ){
        case "ADD" : {
            return {
                ...state,
                users: [...state.users, {
                    name: action.name,
                    klichka: action.klichka,
                    car: action.car,
                    age: action.age,
                    cake: action.cake,
                    id : state.users.length + 1
                }],
                usersCount: state.userCount+1
            }
        }
        case "DELETE" : {
            return {
                ...state,
                users: state.users.filter(i => i.id !== action.id),
                userCount: state.userCount-1
            }
        }
        case "DELETEALL" : {
            return {
                ...state,
                users: [],
                userCount: 0
            }
        }
        default : return state
    }
}

export const addUsers = (name,klichka,car,age,cake) => {
    return (dispatch) => {
        return dispatch({type: "ADD", name, klichka, car, age,cake})
    }
}
export const deleteUsers = (id) => {
    return (dispatch) => {
        return dispatch({type:"DELETE", id})
    }
}
export const deleteAll = () => {
    return (dispatch) => {
        return dispatch({type:"DELETEALL"})
    }
}