import { useDispatch, useSelector } from 'react-redux'
import { Book } from '../interface/interface';
import { actionBook } from '../actions/action';


export default function LibaryBook() {
    const data:any = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("giá trị data lấy về", data);
    // hàm đi update status
    const handleUpdateStatus = (id:number) =>{
        console.log("id", id);
        // dispatch({
        //     type:"UPDATE_STATUS",
        //     payload:id,
        // })
        dispatch(actionBook("UPDATE_STATUS",id));
    } 
    const handleAddBook = (newBook: Book) => {
        dispatch(actionBook("ADD_BOOK", newBook));
    }
    const handleUpdateBook = (updatedBook: Book) => {
        dispatch(actionBook("UPDATE_BOOK", updatedBook));
    }
    const handleDeleteBook = (id: number) => {
        console.log("id", id);
        dispatch(actionBook("DELETE_BOOK", id));
    }
  return (
    <div>Book
        <button onClick={()=>handleAddBook}>Thêm sách</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Người mượn</th>
                    <th>Ngày mượn</th>
                    <th>Ngày trả</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.bookReducer.map((book:Book, index:number) => {
                        return (
                            <tr key={book.id}>
                                <td>{index+1}</td>
                                <td>{book.name}</td>
                                <td>{book.student}</td>
                                <td>{book.borrow}</td>
                                <td>{book.pay}</td>
                                <td onClick={() => handleUpdateStatus(book.id)}>{book.status?<button>Đã trả</button>:<button>Chưa trả</button>}</td>
                                <td>
                                    <button onClick={()=>handleUpdateBook({...book, name: book.name})}>Sửa</button>
                                    <button onClick={()=> handleDeleteBook(book.id)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
