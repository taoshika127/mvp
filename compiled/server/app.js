var express = require('express');

var app = express();
app.use(express["static"](__dirname + './src'));
app.use(express.json());
var port = 3000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInVzZSIsIl9fZGlybmFtZSIsImpzb24iLCJwb3J0IiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcuL3NyYycpKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cblxubGV0IHBvcnQgPSAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH0uLi5gKTtcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUVBLElBQU1DLEdBQUcsR0FBR0YsT0FBTyxFQUFuQjtBQUVBRSxHQUFHLENBQUNDLEdBQUosQ0FBUUgsT0FBTyxVQUFQLENBQWVJLFNBQVMsR0FBRyxPQUEzQixDQUFSO0FBRUFGLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSCxPQUFPLENBQUNLLElBQVIsRUFBUjtBQUdBLElBQUlDLElBQUksR0FBRyxJQUFYO0FBRUFKLEdBQUcsQ0FBQ0ssTUFBSixDQUFXRCxJQUFYLEVBQWlCLFlBQU07RUFDckJFLE9BQU8sQ0FBQ0MsR0FBUiw2QkFBaUNILElBQWpDO0FBQ0QsQ0FGRCJ9