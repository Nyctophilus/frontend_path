class Todo {
  id: string;
  constructor(public text: string) {
    this.id = new Date().toISOString();
  }
}

export default Todo;
