import { Badge } from "react-bootstrap";
// import { FcEditImage } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";

const EditPlannerItem = () => {
  return (
    <Badge onClick={() => console.log("badge clicked")}>
      {/* <FcEditImage className="sidebarEdit " /> */}
      <GrEdit className="sidebarEdit " />
    </Badge>
  );
};
export default EditPlannerItem;
