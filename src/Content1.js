import { useState } from "react";

const Content1 = () => {
    const [listCongviec, setlistCongviec] = useState([]);
    /*Đây là hàm khởi tạo của React */
    // useEffect(()=>
    //     //const LayDuLieuTuBackend
    //     )
        
         


    const Themmoi = () => {
        const soluong = listCongviec.length;
        const newlistCongviec = listCongviec.concat({
            id: (soluong + 1),
            title: 'Việc ' + (soluong + 1),
            completed: false
        });
        setlistCongviec(newlistCongviec);
    }

    const CheckCongviec=id=>
    {
        const newlistCongviec=listCongviec.map(phantu=>{
            if (phantu.id === id)
            {
                //mỗi vòng lặp là một phần tử
                phantu.completed=!phantu.completed;
            }
            return phantu;
        });
        setlistCongviec(newlistCongviec);
    }

    const XoaCongviec=id=>
    {
        const newlistCongviec=listCongviec.filter(phantu=>{
            return phantu.id!==id;
        });
        setlistCongviec(newlistCongviec);
    }
    return (
        <div>
            <p><h1>Việc cần làm</h1></p>
            <p><input type="button" onClick={Themmoi.bind(this)} value="Thêm mới" /></p>
            {
                listCongviec.map(congviec => {
                    return (
                        <p key={congviec.id}>{congviec.title}
                            <input type="checkbox" checked={congviec.completed} onChange={CheckCongviec.bind(congviec.id)}></input>
                            <input type="button" onClick={XoaCongviec.bind(congviec.id)} value="Xóa" />
                        </p>


                    )
                }

                )

            }


        </div>
    );

}

export default Content1;
