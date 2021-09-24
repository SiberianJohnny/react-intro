import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { checkboxAction } from "../../actions/profilePageActions";


const ProfilePage = () => {
  const profileName = useSelector((state) => state.testName);
  const profileCheckbox = useSelector((state) => state.testCheckbox);
  const checkFunc = (profileCheckbox ? '100% not a robot' : profileName)

  const dispatch = useDispatch();
  const mutateState = () => {
    dispatch(checkboxAction())
  };
  return (
    <div>
      Profile Page.
      <br />
      Hello, {checkFunc}!
      <br />
      Click if you are not a robot <Checkbox onClick={mutateState} />
    </div>
  );
};

export default ProfilePage;