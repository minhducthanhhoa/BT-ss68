// khai báo các hành động cho dự án 
export const actionBook = (type:any,payload:any)=>{
    return {
        type:type,
        payload:payload,
    }
}