import { useState, useEffect, createContext } from "react";
import { FormElements } from "./FormElements";

export const formBuilderContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function FormBuilderProvider({ children }) {
  // ✅ استرجاع العناصر من localStorage إذا كانت موجودة
  const [elements, setElements] = useState(() => {
    const saved = localStorage.getItem("formElements");
    return saved ? JSON.parse(saved) : [];
  });
  const [formName, setFormName] = useState(() => {
    const saved = localStorage.getItem("formName");
    return saved || "نموذج بدون اسم";
  });

  const [selectedElement, setSelectedElement] = useState(null);

  // ✅ كل مرة العناصر تتغير، احفظها في localStorage
  useEffect(() => {
    localStorage.setItem("formElements", JSON.stringify(elements));
  }, [elements]);
  useEffect(() => {
    localStorage.setItem("formName", formName);
  }, [formName]);
  // إضافة عنصر جديد
  const addElement = (type) => {
    const element = FormElements[type];
    if (!element) return;

    const id = Date.now().toString();
    const newInstance = element.construct(id);
    setElements((prev) => [...prev, newInstance]);
  };

  // حذف عنصر
  const deleteElement = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا العنصر؟")) {
      setElements((prev) => prev.filter((el) => el.id !== id));
      if (selectedElement?.id === id) {
        setSelectedElement(null);
      }
    }
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
        deleteElement,
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
    </formBuilderContext.Provider>
  );
}
