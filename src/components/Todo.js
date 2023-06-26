import React from 'react'
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Todo({value, onDelete}) {
    return (
        <>
            <div className='todo_data col-lg-5 mx-auto mt-2'>
                <div className='todo_container d-flex justify-content-between px-2 mb-3 align-items-center' style={{ background: "#dcdde1", height: "45px" }}>
                <li style={{ listStyle: "none" }}>{value}</li>
                    <div className='edit_dlt py-2 d-flex justify-content-between align-items-right'>
                        {/* <EditIcon /> */}
                        <DeleteIcon style={{cursor : "pointer"}} onClick={onDelete} />
                        {/* <RemoveRedEyeIcon /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo