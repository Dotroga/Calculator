
export type ButtonsType = typeof buttons
export const buttons =
  [{value:'CE', name: 'deleteALL'},
    {value:'C', name: 'delete'},
    {value:'%', name: 'percent'},
    {value:'÷', name: 'share'},
    {value:'7', name: 'seven'},
    {value:'8', name: 'eight'},
    {value:'9', name: 'nine'},
    {value:'×', name: 'multiply'},
    {value:'4', name: 'four'},
    {value:'5', name: 'five'},
    {value:'6', name: 'six'},
    {value:'−', name: 'minus'},
    {value:'1', name: 'one'},
    {value:'2', name: 'two'},
    {value:'3', name: 'three'},
    {value:'+', name: 'plus'},
    {value:'0', name: 'zero'},
    {value:',', name: 'comma'},
    {value:'=', name: 'equally'}
  ]

export type DataType = typeof data
export const data = {value: '0', error : false}



export const reducer = (state:DataType = data, action: string):DataType => {
    if (action === 'CE') {
        return {...state, value: '0'}
    } else if (action === 'C') {
        return state.value.length === 1
          ? {...state, value: '0'}
          : state.value.slice(-1) === ' '
            ? {...state, value: state.value.substring(0, state.value.length - 3)}
            : {...state, value: state.value.substring(0, state.value.length - 1)}
    } else if (/\d/.test(action)) { // число от 0 до 9
        return  state.value === '0'
          ? {...state, value: action, error: false}
          : {...state, value: state.value + action, error: false}
    } else if (/,/.test(action)) {
        let space = false
        let comma = false
        for (let i = state.value.length; i > 0; i--) {
            const arr = state.value.split('')
            if (arr[i] === ' ') space = true
            if (arr[i] === ',') comma = true
            if(comma)break
            if(space)break
        }
        return comma && !space || !(/\d/.test(state.value.slice(-1)))
          ? {...state, error: true}
          : {...state, value: state.value + action, error: false}
    } else if (/[÷×−+]/.test(action)) {
        return /[÷×−+]/.test(state.value.slice(-2))
          ? {...state, error: true}
          : {...state, value: state.value + ` ${action} `, error: false}
    }
    return state
}



