


const shorten=(title:any)=>{
    const splits=title.split(' ')
    const newS=`${splits[0]} ${splits[2]}`
    return newS
}
const isInCart = (state:any,id:any) =>{
    const result = !!state.items.find((item:any) => item.id === id)
    return result
}
const quantityCount = (state:any,id:any)=>{
    const index = state.items.findIndex((item:any) => item.id === id)
    if(index===-1){
        return false
    }else {
        return state.items[index].quantity
    }
}
export {shorten,isInCart,quantityCount}