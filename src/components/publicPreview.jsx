import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/form.css";

let PublicPreview = () => {
  let { rid } = useParams();

  let [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, []);

  return (
    <>
      {previewData && previewData.details.isPublic ? (
        <>
          <p className={`template-${previewData.code}`}>
            {previewData.details.fName}
            {previewData.details.lName}
            {previewData.details.Email}
            {previewData.details.City}
            {previewData.details.state}
            {previewData.details.PhoneNo}
            {previewData.details.Degree}
            {previewData.details.CGPA}
            {previewData.details.Institute_Name}
            {previewData.details.year}
          </p>
        </>
      ) : (
        "Not available or not public"
      )}
    </>
  );
};

export default PublicPreview;
