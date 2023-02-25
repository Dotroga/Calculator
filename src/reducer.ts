
type ButtonsType = typeof buttons

export const buttons =
  [{value:'CE', name: 'deleteALL'},
    {value:'C', name: 'delete'},
    {value:'%', name: 'percent'},
    {value:'/', name: 'share'},
    {value:'7', name: 'seven'},
    {value:'8', name: 'eight'},
    {value:'9', name: 'nine'},
    {value:'*', name: 'multiply'},
    {value:'4', name: 'four'},
    {value:'5', name: 'five'},
    {value:'6', name: 'six'},
    {value:'-', name: 'minus'},
    {value:'1', name: 'one'},
    {value:'2', name: 'two'},
    {value:'3', name: 'three'},
    {value:'+', name: 'plus'},
    {value:'0', name: 'zero'},
    {value:',', name: 'comma'},
    {value:'=', name: 'equally'}
  ]

type ValueType = [string,string]
export const value: ValueType = ['','0']

export const reducer = (state: ValueType = value, action:string):ValueType => {
return ['','0']
}


