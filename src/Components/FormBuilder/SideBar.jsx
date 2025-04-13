import { useContext } from "react";
import { FormElements } from "./FormElements";
import { formBuilderContext } from "./FormBuilderContext";

export default function SideBar() {
  const {
    addElement,
    selectedElement,
    updateElementProperties,
    closeProperties,
  } = useContext(formBuilderContext);

  return (
    <div
      className="col-3 bg-light p-3 border-end overflow-auto"
      style={{ minHeight: "100vh" }}
    >
      <h3 className="fw-bold mb-4">Available Elements</h3>

      {!selectedElement ? (
        Object.keys(FormElements).map((key) => {
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
        })
      ) : (
        <div className="w-100">
          <h3 className="fw-bold mb-4">Editing Properties</h3>
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
          <button
            onClick={closeProperties}
            className="mt-4 w-100 btn btn-secondary"
          >
            Close Properties
          </button>
        </div>
      )}
    </div>
  );
}
