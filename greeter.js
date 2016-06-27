/**
 * Created by bankeys-01 on 2016/6/27.
 */
function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "jane", lastName: "User" };
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map