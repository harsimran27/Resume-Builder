import Preview from "./preview";
import "./css/personal.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsCreator } from "../redux/detailsAction";
import { useHistory } from "react-router-dom";

let Personal = () => {
  let details = useSelector((state) => state.details);
  console.log(details);
  let dispatch = useDispatch();
  let history = useHistory();

  let { fName, lName, Email, City, State, PhoneNo } = details;

  return (
    <>
      <div className="personal-container">
        <div className="personal-details">
          <form class="row g-3 m-4">
            <h2 className="text-primary">Personal Details</h2>
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">
                First name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ fName: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault01"
                value={fName}
                required
              />
            </div>
            <div class="col-md-3">
              <label for="validationDefault02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ lName: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault02"
                value={lName}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">
                Username
              </label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  onChange={(e) => {
                    dispatch(detailsCreator({ Email: e.currentTarget.value }));
                  }}
                  class="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  value={Email}
                  required
                />
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationDefault03" class="form-label">
                City
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ City: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault03"
                value={City}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault03" class="form-label">
                State
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ State: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault03"
                value={State}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault05" class="form-label">
                Phone No
              </label>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailsCreator({ PhoneNo: e.currentTarget.value }));
                }}
                class="form-control"
                id="validationDefault05"
                value={PhoneNo}
                required
              />
            </div>
            <div class="col-12 mt-4">
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => {
                  history.push("qualifications");
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
        <Preview />
      </div>
    </>
  );
};

export default Personal;
