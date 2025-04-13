
export const TextFieldFormElement = {
  type: "TextField",

//   ده بينشا نسخة جديدة من العنصر 
  construct: (id) => ({
    id,
    type: "TextField",
    extraAttributes: {
      label: "Text Field",
      placeholder: "Enter text here...",
    }
  }),

//  اللي هضيفه في ال sidebar 
  designerBtnElement: {
    icon: <span>🔤</span>,
    label: "Text Field"
  },

  // عرض في مصمم النماذج (Designer View)
  designerComponent: ({ extraAttributes }) => (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Text Field"}
      </label>
      <input type="text" placeholder={extraAttributes?.placeholder || ""} disabled />
    </div>
  ),

  // عرض في النموذج النهائي (Form View)
  formComponent: ({ extraAttributes }) => (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Text Field"}
      </label>
      <input
        type="text"
        placeholder={extraAttributes?.placeholder || ""}
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
  ),

  // خصائص يمكن تعديلها في واجهة الإعدادات (ممكن توسعيها لو حبيتي)
  propertiesComponent: ({ element, updateElement }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      updateElement({
        ...element,
        extraAttributes: {
          ...element.extraAttributes,
          [name]: value
        }
      });
    };

    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <label>Label</label>
          <input
            type="text"
            name="label"
            value={element.extraAttributes?.label || ""}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Placeholder</label>
          <input
            type="text"
            name="placeholder"
            value={element.extraAttributes?.placeholder || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};
