import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
  let {
    fName,
    lName,
    Email,
    City,
    state,
    PhoneNo,
    Degree,
    CGPA,
    Institute_Name,
    year,
  } = useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);

  return (
    <>
      <div className="preview-container">
        <div className={`template-${templateCode}`}>{fName}</div>
        <div className={`template-${templateCode}`}>{lName}</div>
        <div className={`template-${templateCode}`}>{Email}</div>
        <div className={`template-${templateCode}`}>{City}</div>
        <div className={`template-${templateCode}`}>{state}</div>
        <div className={`template-${templateCode}`}>{PhoneNo}</div>
        <div className={`template-${templateCode}`}>{Degree}</div>
        <div className={`template-${templateCode}`}>{CGPA}</div>
        <div className={`template-${templateCode}`}>{Institute_Name}</div>
        <div className={`template-${templateCode}`}>{year}</div>
      </div>
    </>
  );
};

export default Preview;
