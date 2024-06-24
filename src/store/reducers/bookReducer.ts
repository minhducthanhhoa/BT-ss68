// khởi tạo state 
import { Book } from "../../interface/interface"
// const initialBook:Book[]=JSON.parse(localStorage.getItem("book") || "[]");
const initialBook:Book[]=[
    {
        id:1,
        name:"đắc nhân tâm",
        borrow:"23/06/2024",
        pay:"27/06/2024",
        student:"huyền",
        status: false
    },
    {
        id:2,
        name:"nhà giả kim",
        borrow:"15/04/2024",
        pay:"20/04/2024",
        student:"trang",
        status: false
    },
    {
        id:3,
        name:"conan",
        borrow:"05/11/2024",
        pay:"10/11/2024",
        student:"minh thu",
        status: false
    }
]



// Tạo hàm bookReducer
// Chức năng của hàm reducer là tính toán trả về state mới dựa vaod action
export const bookReducer = (state = initialBook,action:any) =>{
    switch (action.type) {
        case "ADD_BOOK":
            console.log("đang tiến hành thêm sách", action);
            return [...state, action.payload];
        case "DELETE_bOOK":
            console.log("đang tiến hành xóa sách", action);
            let confirmDeleteBook = window.confirm(
                "Bạn có chắc chắn muốn xóa cuốn sách này?"
            );
            if (!confirmDeleteBook) {
                return state;
            }
            return state.filter(book => book.id !== action.payload);
        case "UPDATE_STATUS":
            console.log("đang tiến hành update trạng thái", action);
            // lấy ra id action.payload
            // tìm vị trí theo id
            let confirmUpdateStatus = window.confirm(
                "bạn có muốn update trạng thái hay không?"
            );
            if (!confirmUpdateStatus) {
                return;
            }
            let index = state.findIndex((item) => item.id == action.payload);
            // console.log("vị trí của phần tử cần update trạng thái", index);
            // đi update lại status
            state[index].status = !state[index].status;
            return [...state];
        case "UPDATE_BOOK":
            console.log("đang tiến hành cập nhật sách", action);
            let confirmUpdateBook = window.confirm(
                "Bạn có chắc chắn muốn cập nhật thông tin cuốn sách này?"
            );
            if (!confirmUpdateBook) {
                return state;
            }
            let updatedIndex = state.findIndex((item) => item.id == action.payload.id);
            if (updatedIndex !== -1) {
                state[updatedIndex] = { ...state[updatedIndex], ...action.payload };
            }
            return [...state];
        default:
            return state;
    }
}