function CheckIsAdmin(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
    return false;
}
var res = CheckIsAdmin({ name: "virat", email: "vk@.com", isAdmin: true });
console.log(res);
var res2 = CheckIsAdmin({ name: "virat", email: "vk@.com" });
console.log(res2);
