const LIST = "shapelist";

function getShapesList() {
    //get list of drawn shapes from local storage (ls)
    let shapes_list = localStorage.getItem(LIST);
    if (shapes_list == null) {
        return new Array();
    } else {
        return JSON.parse(shapes_list);
    }
}

function saveShape(shape) {
    //save shape to ls
    let shapes_list = getShapesList();

    shapes_list.push(shape);
    localStorage.setItem(LIST, JSON.stringify(shapes_list));
}

function deleteDrawing() {
    //clear entire shapes list/drawing from ls
    localStorage.removeItem(LIST);
}

export {
    saveShape,
    deleteDrawing,
    getShapesList
}