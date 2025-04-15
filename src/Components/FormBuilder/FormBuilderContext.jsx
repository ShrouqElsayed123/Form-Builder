import { useState, useEffect, createContext } from "react";
import { FormElements } from "./FormElements";
import Popup from './Popup/Popup';  // استيراد مكون Popup
import toast from "react-hot-toast";

export const formBuilderContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function FormBuilderProvider({ children }) {
  // ✅ استرجاع العناصر من sessionStorage إذا كانت موجودة
  const [elements, setElements] = useState(() => {
    const saved = sessionStorage.getItem("formElements");
    return saved ? JSON.parse(saved) : [];
  });
  const [formName, setFormName] = useState(() => {
    const saved = sessionStorage.getItem("formName");
    return saved || "نموذج بدون اسم";
  });

  const [selectedElement, setSelectedElement] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // إضافة حالة لعرض النافذة المنبثقة
  const [elementToDelete, setElementToDelete] = useState(null); // لتخزين العنصر الذي سيتم حذفه

  // ✅ كل مرة العناصر تتغير، احفظها في sessionStorage
  useEffect(() => {
    sessionStorage.setItem("formElements", JSON.stringify(elements));
  }, [elements]);
  useEffect(() => {
    sessionStorage.setItem("formName", formName);
  }, [formName]);

  // إضافة عنصر جديد
  const addElement = (type) => {
    const element = FormElements[type];
    if (!element) return;

    const id = Date.now().toString();
    const newInstance = element.construct(id);
    setElements((prev) => [...prev, newInstance]);
  };

  // عرض النافذة المنبثقة لتأكيد الحذف
  const showDeletePopup = (id) => {
    setElementToDelete(id);  // حفظ العنصر الذي سيتم حذفه
    setShowPopup(true);  // عرض النافذة المنبثقة
  };

  // حذف العنصر
  const deleteElement = () => {
    if (elementToDelete) {
      setElements((prev) => prev.filter((el) => el.id !== elementToDelete));
      if (selectedElement?.id === elementToDelete) {
        setSelectedElement(null);
      }
      toast.success("تم حذف العنصر بنجاح")
    }
    setShowPopup(false);  // إخفاء النافذة المنبثقة بعد الحذف
    setElementToDelete(null);  // مسح العنصر المحفوظ
  };

  // إلغاء الحذف
  const cancelDelete = () => {
    setShowPopup(false);  // إخفاء النافذة المنبثقة دون الحذف
    setElementToDelete(null);  // مسح العنصر المحفوظ
  };

  // تغيير ترتيب العناصر
  const moveElement = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= elements.length) return;

    const newElements = [...elements];
    const [movedItem] = newElements.splice(index, 1);
    newElements.splice(newIndex, 0, movedItem);
    setElements(newElements);
  };

  // تحديث خصائص العنصر
  const updateElementProperties = (updatedElement) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
    );
    setSelectedElement(updatedElement);
  };

  // إغلاق خصائص العنصر
  const closeProperties = () => {
    setSelectedElement(null);
  };

  return (
    <formBuilderContext.Provider
      value={{
        deleteElement: showDeletePopup,  // تغيير دالة الحذف لتعرض النافذة المنبثقة
        moveElement,
        addElement,
        updateElementProperties,
        closeProperties,
        setSelectedElement,
        selectedElement,
        elements,
        setFormName,
        formName
      }}
    >
      {children}

      {/* عرض النافذة المنبثقة إذا كانت مفعلة */}
      {showPopup && (
        <Popup
          message="هل أنت متأكد من حذف هذا العنصر؟"
          onConfirm={deleteElement}
          onCancel={cancelDelete}
        />
      )}
    </formBuilderContext.Provider>
  );
}
