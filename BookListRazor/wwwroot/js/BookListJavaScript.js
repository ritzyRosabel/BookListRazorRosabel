var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/api/Books",
            "type": "GET",
            "datatype":"json"
        },
        "columns": [
            {"data":"name", "width":"20%"},
            {"data":"author", "width":"20%"},
            { "data": "isbn", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div>
                        <a href = "/BookList/Edit?id=${data}" class = 'btn btn-success text-white' style = 'cursor : pointer; width : 70px;'>Edit</a>
                        <a class ='btn btn-danger text-white' style = 'cursor:pointer; width:70px'> Delete</a>
                            </div>`
                },
                "width":"40%"
            }
        ],
        "language": {
            "emptyTable": "No data found"
        },
        "width":"100%"
    });
}