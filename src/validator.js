export const isEmpty = (stringData) => {
    if(stringData === null || stringData === undefined || stringData === '') return { isError:true, data:stringData }
    else return { isError:false, data:stringData }
}
export const emailValidator = (dataInput) => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(reg.test(dataInput)) return { isError:false, data:dataInput }
    else return { isError:true, data:dataInput }
}