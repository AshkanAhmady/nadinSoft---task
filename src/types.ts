export interface ChildsComponentsType {
  children: React.ReactNode;
}

export interface citySelectType {
  label: string;
  value: { lat: string; lng: string };
}

export interface ProfileSelectType {
  label: string;
  value: string;
}

export interface TodoType {
  id: number;
  isComplete: boolean;
  text: string;
}

export interface TodoListComponentPropsType {
  todos: TodoType[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  updateTodo: (newValue: string, id: number) => void;
}

export interface TodoFormComponentPropsType {
  submitTodo: (input: string) => void;
  edit?: TodoType;
}

export interface TodoComponentPropsType {
  todo: TodoType;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: any;
}
