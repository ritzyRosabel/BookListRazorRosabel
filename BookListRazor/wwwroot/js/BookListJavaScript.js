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
            {"data":"name", "width":"30%"}
            {"data":"author", "width":"30%"}
            { "data": "isbn", "width": "30%" }
            {
                "data": "id",
                "render": function (data) {
                   
                }
            }
        ]
    });
}