import nexticon from "../assets/next-icon.png"
import backicon from "../assets/back-icon.png"

const PageNumber = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-2" style={{gap:"2rem"}}>
        <img style={{width:"3rem"}} src={backicon} alt="" />
        <p style={{fontSize:"1.5rem", marginTop:"0.7rem"}}>1</p>
        <img style={{width:"3rem"}} src={nexticon} alt="" />
    </div>
  )
}

export default PageNumber;