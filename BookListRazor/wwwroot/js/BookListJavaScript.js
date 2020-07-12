var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/api/Book",
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
                        <a class ='btn btn-danger text-white' style = 'cursor:pointer; width:70px' onclick="Delete('/api/DeleteBook',${data})"> Delete</a>
                            </div>`;
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

function Delete(url, id) {
    swal({
        title: "Are you sure you want to delete?",
        text: "If deleted, Data cannot be recovered",
        icon: "warning",
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                data: {
                    "id":id
                },
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else
                    {
                        toastr.error(data.message);
                    }
                }
            });
        }
    });

}