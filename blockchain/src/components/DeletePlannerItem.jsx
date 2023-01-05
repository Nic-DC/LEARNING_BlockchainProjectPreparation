import { Badge } from "react-bootstrap";
import { FcEmptyTrash } from "react-icons/fc";

const DeletePlannerItem = ({ getUpdatedPlannersList }) => {
  return (
    <Badge>
      <FcEmptyTrash className="sidebarTrash" />
    </Badge>
  );
};
export default DeletePlannerItem;
