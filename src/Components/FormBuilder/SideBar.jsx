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
           className="col-3  p-3 border-end"
           style={{
             maxHeight: "100vh",   // تأكد من أن الشريط الجانبي لا يتجاوز ارتفاع الشاشة
             overflowY: "auto",    // تفعيل التمرير العمودي
             height: "100vh",      // ارتفاع الشريط الجانبي يشمل كامل نافذة المتصفح
             backgroundColor:"white"
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
                     className="d-flex align-items-center gap-2 p-2 mb-2 rounded  w-100 border-0 shadow-sm"
                     style={{backgroundColor:"#F9FAFF"}}
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
  );
}