import formIcon from '../../assets/imgs/form-icon.png'
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function FormCardDetails({formname,numofresponse,formdate,formstate,bgcolor}) {
  return (
   <>
     <tr className=''>
         {/*//////////////////////form name////////////////////// */}
      <td >
        <div className='form-name-col d-flex align-items-center justify-content-start gap-2'>
            <div className="form-img">
                <img src={formIcon} alt="form icon" width="40px"/>
            </div>
            <div className='txt d-flex flex-column'>
                <p className='fs-4 fw-bold m-0'>{formname}</p>
                <p className='num-of-response m-0 fw-medium' >{numofresponse} Response</p>
            </div>
        </div>
      </td>
       {/*//////////////////////form Date////////////////////// */}
      <td>
        <div className='form-date-col'>
            <p className='date fw-bold'>{formdate}</p>
        </div>
      </td>

       {/*//////////////////////form Details////////////////////// */}
      <td>
        <div className='form-moredetails-col d-flex align-items-center justify-content-between ps-1'>
                           {/* form state  */}
        <div className='Publish-state' style={{backgroundColor:bgcolor}}><p className='m-0' >{formstate}</p></div>
                           {/* form response  */}
        <div className='response-link d-flex align-items-center justify-content-center gap-2'>
            <NavLink to="" className="text-decoration-none ">Responses </NavLink>
            <i className="fa-solid fa-table"></i>
        </div>
                           {/* form more details  */}
        <div className='more'>
        <div className="dropdown">
  <button className="btn fw-100 p-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
        More
  <i className="fa-solid fa-angle-down"></i>
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li className='d-flex align-items-center gap-2 ps-2 dropdown-item'> <i className="fa-solid fa-eye"></i> <a className=" p-0 " href="#"> Preview</a></li>
    <li><hr className="dropdown-divider" /></li>

    <li className='d-flex align-items-center gap-2 ps-2 dropdown-item '><i className="fa-solid fa-arrow-up-from-bracket"></i><a className=" p-0 " href="#">Publish</a></li>
    <li><hr className="dropdown-divider" /></li>

    <li className='d-flex align-items-center gap-2 ps-2 dropdown-item '><i className="fa-solid fa-copy"></i><a className=" p-0 " href="#"> Copy Url</a></li>
    <li><hr className="dropdown-divider" /></li>

    <li className='d-flex align-items-center gap-2 ps-2 dropdown-item '> <i className="fa-solid fa-trash"></i><a className=" p-0 " href="#"> Delete</a></li>
    <li><hr className="dropdown-divider" /></li>

    <li className='d-flex align-items-center gap-2 ps-2 dropdown-item '><i className="fa-solid fa-pen"></i> <a className=" p-0 " href="#">Edit</a></li>

        </ul>
        </div>
        </div>


        </div>
        </td>
      
    </tr>
    </>
  )
}
