import { CheckboxFieldFormElement } from "./Fields/CheckboxFieldFormElement";
import { TextFieldFormElement } from "./Fields/TextFieldFormElement";
// ممكن تضيف غيرهم بنفس الشكل (TextareaFieldFormElement مثلاً)

const FormElements = {
  TextField: TextFieldFormElement,
  Checkbox:CheckboxFieldFormElement
  // Textarea: TextareaFieldFormElement, (لو أضفت عنصر جديد)
};

export { FormElements };
