import nexticon from "../assets/next-icon.png"
import backicon from "../assets/back-icon.png"

const PageNumber = ( {pageNumber, setPageNumber, totalpages} ) => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-2" style={{gap:"2rem"}}>
        <img style={{width:"3rem", cursor:"pointer"}} src={backicon} alt="" onClick={()=>pageNumber>=2 ? setPageNumber(pageNumber-1) : setPageNumber(1) }/>
        <p style={{fontSize:"1.5rem", marginTop:"0.7rem"}}>{pageNumber}</p>
        <img style={{width:"3rem", cursor:"pointer"}} src={nexticon} alt="" onClick={()=> pageNumber>0 && pageNumber<totalpages ? setPageNumber(pageNumber+1) : setPageNumber(1)}/>
    </div>
  )
}

export default PageNumber;