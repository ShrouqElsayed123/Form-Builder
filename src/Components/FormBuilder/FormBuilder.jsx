import { useContext, useState } from "react";
import { FormElements } from "./FormElements";
import { formBuilderContext } from "./FormBuilderContext";
import { DragIndicator, Edit } from "@mui/icons-material";
import SideBar from "./SideBar";

// dnd-kit
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// eslint-disable-next-line react/prop-types
const SortableElement = ({ el, setSelectedElement, deleteElement }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: el.id });

  const Component = FormElements[el.type]?.formComponent;
  if (!Component) return null;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "1px dashed #ccc",
    padding: "12px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={() => setSelectedElement(el)}
      className="d-flex justify-content-center align-items-center gap-2"
    >
      {/* أيقونة السحب */}
      <span
        {...listeners}
        style={{
          // position: "absolute",
          // left: "10px", // المكان في الجهة اليسرى
          // top: "50%",  // في المنتصف عموديًا
          // transform: "translateY(-50%)", // لضبط المركز تمامًا
          cursor: "grab",
          color: "#C3C3C3",
        }}
      >
        <DragIndicator />
      </span>

    <div className="flex-grow-1">
    <Component {...el} />

<div className="mt-2">
  <button
    onClick={(e) => {
      e.stopPropagation();
      deleteElement(el.id);
    }}
    className="text-danger"
  >
    Delete
  </button>
</div>
    </div>
    </div>
  );
};

const FormBuilder = () => {
  const {
    elements,
    deleteElement,
    setSelectedElement,
    handleDragEnd,
    formName,
    setFormName,
  } = useContext(formBuilderContext);
  const [editingName, setEditingName] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div
      className="d-flex h-100"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M10 0L0 0 0 10' fill='none' stroke='%23ccc' stroke-width='0.5'/></svg>")`,
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <SideBar />

      <div className="col-9 p-4 p-5" style={{ maxHeight: "100vh", overflow: "auto" }}>
        <div className="border p-3 bg-white rounded shadow" style={{ marginBottom: "100px" }}>
          <h3 className="fw-bold mb-4">Form Preview</h3>

         <div>
           <div className="d-flex align-items-center mb-3">
            {editingName ? (
              <input
                className="form-control form-control-sm me-2"
                style={{ maxWidth: "300px" }}
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                onBlur={() => setEditingName(false)}
                autoFocus
              />
            ) : (
              <>
                <h3 className="me-2 mb-0 ">{formName}</h3>
                <button
                  className="btn btn-sm "
                  onClick={() => setEditingName(true)}
                >
                  <Edit size={16} />
                </button>
              </>
            )}
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={elements.map((el) => el.id)}
              strategy={verticalListSortingStrategy}
            >
              {elements.map((el) => (
                <SortableElement
                  key={el.id}
                  el={el}
                  setSelectedElement={setSelectedElement}
                  deleteElement={deleteElement}
                />
              ))}
            </SortableContext>
          </DndContext>
         </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
