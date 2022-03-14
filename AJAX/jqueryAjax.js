$(function () {
  $("#show").load("dummy.txt");
  $("#show1").load(
    "demo.html .content",
    function (responseText, statusText, XhrObject) {
      console.log(responseText);
      console.log(statusText);
      console.log(XhrObject);
    }
  );
});

// get data on button click
$(function () {
  $("button").on("click", function () {
    $("#show1").load($(this).data("page") + " .content");
  });
});

// get & post
$(function () {
  $("button").on("click", function () {
    $.post(
      "auth.php",
      { name: "fayy", lastlogin: "Today" },
      function (data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
      }
    );
  });
});

// $.ajax

$(function () {
  $("button").on("click", function () {
    $.ajax({
      // [ ] ifModified
      // [ ] dataFilter

      // type: 'POST', // Alias for method.. Jquery before 1.9.0

      method: "POST", // method Used for the request

      //   cache: false, // cache the request, Default => true

      //   async: false, // default => true

      //   timeout: 3000,  // timeout for the request

      //   dataType: 'html', // expected dataType from the server response ... Default is intellegance suggest

      //   username: "fayy", // username, pw for authentication with the request

      //   password: "dummyAhly22",

      // multipart for iamges

      contentType: "multipart/form-data", //content type for the request, Default is application/x-www.form-urlencoded

      url: "auth.php", // URL to send the request...... Defualt is ===> current url

      // FIXME
      data: { name: "Fayy", lastlogin: `${input.value}` }, // data which sent with request

      beforeSend: function (xhr) {
        console.log(`Before send`);
      },

      success: function (data, statusText, XhrObject) {
        //   function to run when request successed
        console.log(`Success! 🥳`);
      },

      error: function (xhr, statusText, errorMsg) {
        console.log(`Error 😱`);
      },

      complete: function (xhr, statusText) {
        //   function to run when request is completed
        // can be completed either success or fail
        console.log(`Request Completed!!`);
      },
    });

    //	FIXME	 $.ajaxSetup({
    //	FIXME url: "ping.php",
    // 	FIXME });
  });
});
