import Preview from "./preview";
import "./css/form.css";
import "./css/personal.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsCreator } from "../redux/detailsAction";
import {saveResume} from "../redux/saveActions";

let Qualifications = () => {
  
  let dispatch = useDispatch();
  let { Degree, CGPA, Institution_Name, year, isPublic } = useSelector((state) => state.details);

  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);

  return (
    <>
      <div className="qualification-container">
        <div className="qualification-details">
          <form class="row g-3 m-4">
            <h2 className="text-primary">Qualification Details</h2>
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">
                Degree
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ Degree: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault01"
                value={Degree}
                required
              />
            </div>
            <div class="col-md-3">
              <label for="validationDefault02" class="form-label">
                CGPA
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ CGPA: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault02"
                value={CGPA}
                required
              />
            </div>
            <div class="col-md-3">
              <label for="validationDefault03" class="form-label">
                Institute_Name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(
                    detailsCreator({ Institution_Name: e.currentTarget.value })
                  );
                }}
                class="form-control"
                id="validationDefault03"
                value={Institution_Name}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault03" class="form-label">
                year
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ year: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault03"
                value={year}
                required
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked={isPublic}
                id="flexCheckDefault"
                onClick={(e) => {
                  dispatch(
                    detailsCreator({ isPublic: e.currentTarget.checked })
                  );
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Make Public
              </label>
            </div>
            <div class="col-12 mt-4">
              <button class="btn btn-primary" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
        <Preview />
      </div>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-save"
      >
        Save to Database
      </button>
    </>
  );
};

export default Qualifications;
