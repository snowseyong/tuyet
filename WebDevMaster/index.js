//Validate MyForm
function Validate() {
    var names = document.getElementById("name").value;
    var address = document.getElementById("addr").value;
    var email = document.getElementById("email").value;
    var regexMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    if (names == "") {
        alert("Bạn chưa nhập họ tên");
        names.focus();
    } else if (address == "") {
        alert("Bạn chưa nhập địa chỉ");
        address.focus();
    } else if (email == "") {
        alert("Bạn chưa nhập email");
        email.focus();
    } else if (!regexMail.test(email)) {
        //
        alert("Email chưa đúng định dạng");

    } else {
        alert("Thành công");
    }
    alert("hehehe");

}