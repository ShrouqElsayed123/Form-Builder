import FormCardDetails from '../../Components/FormCardDetails/FormCardDetails'
import styles from './UserDasboard2.module.css'
import createformimg from '../../assets/imgs/CreateForm.png'
import Loading from '../../Components/Loading/Loading'
export default function UserDasboard2() {
  setTimeout(<Loading />, 5000)
  return (
    <>
   
<div className={styles.UserDasboard2}>
  <div className="container">



<div className="create-form mb-5 d-flex gap-2 flex-column">
  <h3>Create Form</h3>
<img src={createformimg} alt="CreateFormImage" />
</div>









    {/* /////////////////forms details  */}
    <table className="table">
        {/*////////////////////// start table header////////////////////// */}
  <thead className='border-0 pb-2'>
    <tr>
      <th className='border-0 '  scope="col">Form Name</th>
      <th className='border-0 ' scope="col">Last modified</th>
      <th className='border-0  text-end' scope="col">
        <div className="dropdown">
  <button className="btn p-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort By
    <i className="fa-solid fa-arrow-down-short-wide ps-2"></i>
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item " href="#">Title</a></li>
   
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Last modified</a></li>
  </ul>
</div>
      </th>
    </tr>
  </thead>
        {/*////////////////////// end table header////////////////////// */}

        {/*////////////////////// start table body////////////////////// */}

  <tbody>
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Published" bgcolor="var(--main-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Published" bgcolor="var(--main-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Published" bgcolor="var(--main-color)"  />
  <FormCardDetails formname={"formname"} numofresponse={"3"} formdate={"10/12/2024"} formstate="Not Published" bgcolor="var(--secondary-color)"  />
 
  </tbody>
        {/*////////////////////// end table body////////////////////// */}

</table>
</div>
</div>
    
    </>
  )
}
