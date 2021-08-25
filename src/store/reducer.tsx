export type ActionType = {
    id: string,
    value: any,
    type: 'SET_DATA' | 'GET_DATA'
}

export type State = {
    [key:string]: any
}

export function reducer(state: State, action:ActionType) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, [action.id]: action.value }
        default:
            return state
    }
}
