import { Badge } from "react-bootstrap";
import { FcEmptyTrash } from "react-icons/fc";

const DeletePlannerItem = () => {
  return (
    <Badge>
      <FcEmptyTrash className="sidebarTrash" />
    </Badge>
  );
};
export default DeletePlannerItem;
