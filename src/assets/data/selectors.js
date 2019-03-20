export const getTodoState = store => store.todo;

export const getTodoList = store =>
    getTodoState(store) ? getTodoState(store).allScans : [];

export const getTodoById = (store, id) =>
    getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

export const getTodo = store =>
    getTodoList(store).map(id => getTodoById(store, id));

