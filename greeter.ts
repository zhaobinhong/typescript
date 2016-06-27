/**
 * Created by bankeys-01 on 2016/6/27.
 */

interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person) {
    return "hello, " + person.firstName+" "+person.lastName;
}
var user = {firstName:"jane",lastName:"User"};
document.body.innerHTML = greeter(user);