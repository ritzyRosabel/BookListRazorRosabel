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
        "columns"
    });
}