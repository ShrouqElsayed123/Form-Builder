import { ArrowDropDown, Delete } from "@mui/icons-material";

export const DropdownFormElement = {
  type: "Dropdown",

  construct: (id) => ({
    id,
    type: "Dropdown",
    extraAttributes: {
      label: "Select Option",
      placeholder: "Choose an option",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
      ],
      selected: ""
    }
  }),

  designerBtnElement: {
    icon: <ArrowDropDown />,
    label: "Dropdown"
  },

  designerComponent: ({ extraAttributes }) => (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Select Option"}
      </label>
      <select disabled style={{ width: "100%", padding: "8px" }}>
        {extraAttributes?.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  ),

  formComponent: ({ extraAttributes, updateElement }) => {
    const handleChange = (e) => {
      const selectedValue = e.target.value;
      updateElement({
        ...extraAttributes,
        selected: selectedValue,
      });
    };

    return (
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          {extraAttributes?.label || "Select Option"}
        </label>
        <select
          value={extraAttributes?.selected || ""}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        >
          {extraAttributes?.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  },

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

    // تعديل أو إضافة خيار
    const handleOptionChange = (index, e) => {
      const { name, value } = e.target;
      const updatedOptions = [...element.extraAttributes.options];
      updatedOptions[index] = { ...updatedOptions[index], [name]: value };

      // تحديث العنصر بعد تعديل الخيار
      updateElement({
        ...element,
        extraAttributes: {
          ...element.extraAttributes,
          options: updatedOptions
        }
      });
    };

    // إضافة خيار جديد
    const addOption = () => {
      const updatedOptions = [
        ...element.extraAttributes.options,
        { value: "", label: "" }
      ];

      updateElement({
        ...element,
        extraAttributes: {
          ...element.extraAttributes,
          options: updatedOptions
        }
      });
    };

    // حذف خيار
    const deleteOption = (index) => {
      const updatedOptions = element.extraAttributes.options.filter((_, i) => i !== index);
      updateElement({
        ...element,
        extraAttributes: {
          ...element.extraAttributes,
          options: updatedOptions
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

        <div style={{ marginBottom: "10px" }}>
          <label>Options</label>
          {element.extraAttributes?.options?.map((option, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "5px" }}>
              <input
                type="text"
                name="value"
                value={option.value}
                placeholder="Option value"
                onChange={(e) => handleOptionChange(index, e)}
                style={{ flex: 1, marginRight: "5px" }}
              />
              <span style={{ flex: 1, marginRight: "5px" }}>Option {index + 1}</span>
              <button
                onClick={() => deleteOption(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <Delete />
              </button>
            </div>
          ))}
          <button
            onClick={addOption}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Add Option
          </button>
        </div>
      </div>
    );
  }
};
