import { useContext, useState } from "react";
import { FormElements } from "./FormElements";
import { formBuilderContext } from "./FormBuilderContext";
import { Edit } from "@mui/icons-material";

const FormBuilder = () => {
   let { elements, deleteElement, moveElement, setSelectedElement, formName, setFormName,
     addElement, selectedElement, updateElementProperties, closeProperties } = useContext(formBuilderContext);
   const [editingName, setEditingName] = useState(false);

  return (
    <div className="d-flex h-100"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M10 0L0 0 0 10' fill='none' stroke='%23ccc' stroke-width='0.5'/></svg>")`,
        backgroundRepeat: 'repeat',
        minHeight: "100vh"
      }}
    >
      {/* الشريط الجانبي */}
      <div
        className="col-3 bg-light p-3 border-end"
        style={{
          maxHeight: "100vh",   // تأكد من أن الشريط الجانبي لا يتجاوز ارتفاع الشاشة
          overflowY: "auto",    // تفعيل التمرير العمودي
          height: "100vh",      // ارتفاع الشريط الجانبي يشمل كامل نافذة المتصفح
        }}
      >
        {!selectedElement ? (
          <>
            <h3 className="fw-bold mb-4">Available Elements</h3>
            {Object.keys(FormElements).map((key) => {
              const { designerBtnElement } = FormElements[key];
              return (
                <button
                  key={key}
                  onClick={() => addElement(key)}
                  className="d-flex align-items-center gap-2 p-2 mb-2 bg-secondary rounded hover:bg-light w-100"
                >
                  {designerBtnElement.icon} {designerBtnElement.label}
                </button>
              );
            })}
          </>
        ) : (
          <div className="w-100 d-flex flex-column" style={{ overflowY: "auto", maxHeight: "calc(100vh - 150px)" }}>
            {/* إضافة شريط التمرير للخصائص */}
            <h3 className="fw-bold mb-4">Editing Properties</h3>

            <div>
              {(() => {
                const elementDef = FormElements[selectedElement?.type];
                if (!elementDef) {
                  return (
                    <div className="alert alert-danger">
                      ⚠️ لا يمكن عرض خصائص هذا العنصر (type غير معروف).
                    </div>
                  );
                }

                const PropertiesComponent = elementDef.propertiesComponent;

                return (
                  <PropertiesComponent
                    element={selectedElement}
                    updateElement={updateElementProperties}
                  />
                );
              })()}
            </div>

            <button
              onClick={closeProperties}
              className="mt-4 w-100 btn btn-secondary"
              style={{
                position: "sticky",
                bottom: 0,
                zIndex: 1,
                background: "#6c757d",
              }}
            >
              Close Properties
            </button>
          </div>
        )}
      </div>

      {/* باقي الصفحة: Form Preview */}
      <div className="col-9 p-4 p-5 " style={{ maxHeight: "100vh", overflow: "auto" }}>
        {/* المعاينة الحية للفورم */}
        <div className="border p-3 bg-white rounded shadow" style={{ marginBottom: "100px" }}>
          <h3 className="fw-bold mb-4">Form Preview</h3>

          {/* //لعنوان الفورم */}
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

          {elements.map((el, index) => {
            const Component = FormElements[el.type].formComponent;
            return (
              <div
                key={el.id}
                className="relative border-dashed border p-3 mb-4 cursor-pointer"
                onClick={() => setSelectedElement(el)} // تحديد العنصر عند النقر
              >
                <Component {...el} />

                <div className="">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteElement(el.id);
                    }}
                    className="text-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveElement(index, -1);
                    }}
                    className="text-primary"
                  >
                    Up
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveElement(index, 1);
                    }}
                    className="text-primary"
                  >
                    Down
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
