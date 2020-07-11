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
            {"data":"name", "width":"30%"},
            {"data":"author", "width":"30%"},
            { "data": "isbn", "width": "30%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div>
                        <a href = "/BookList/Edit?id=${data}" class = 'btn btn-success text-white' style = 'cursor : pointer; width : 100px;'>Edit</a>
                        <a class ='btn btn-danger text-white' style = 'cursor:pointer; width:100px'> Delete</a>
                            </div>`
                }
            }
        ],
        "language": {
            "emptyTable": "No data found"
        },
        "width":"100%"
    });
}