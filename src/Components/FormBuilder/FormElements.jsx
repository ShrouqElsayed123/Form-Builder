import { CheckboxFieldFormElement } from "./Fields/CheckboxField";
import { DropdownFormElement } from "./Fields/DropdownField";
import { EmailFormElement } from "./Fields/EmailField";
import { PasswordFieldFormElement } from "./Fields/PasswordField";
import { TextFieldFormElement } from "./Fields/TextFieldFormElement";
// ممكن تضيف غيرهم بنفس الشكل (TextareaFieldFormElement مثلاً)

const FormElements = {
  TextField: TextFieldFormElement,
  Checkbox:CheckboxFieldFormElement,
  Password:PasswordFieldFormElement,
  Email:EmailFormElement,
  Dropdown:DropdownFormElement
  // Textarea: TextareaFieldFormElement, (لو أضفت عنصر جديد)
};

export { FormElements };
