import { useState } from "react";
import { Badge } from "react-bootstrap";
// import { FcEditImage } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";

import EditPlannerModal from "./EditPlannerModal";

const EditPlannerItem = ({ getPlanners }) => {
  // MODAL functions and variables:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Badge onClick={() => handleShow()}>
        {/* <FcEditImage className="sidebarEdit " /> */}
        <GrEdit className="sidebarEdit " />
      </Badge>
      <EditPlannerModal getPlanners={getPlanners} show={show} handleClose={handleClose} />
    </>
  );
};
export default EditPlannerItem;
