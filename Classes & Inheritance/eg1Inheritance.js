var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserInheriate = /** @class */ (function () {
    function UserInheriate(name, email) {
        this.name = name,
            this.email = email;
    }
    Object.defineProperty(UserInheriate.prototype, "abc", {
        get: function () {
            return this.code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserInheriate.prototype, "xyz", {
        set: function (num) {
            this.code = num;
        },
        enumerable: false,
        configurable: true
    });
    return UserInheriate;
}());
var User2 = /** @class */ (function (_super) {
    __extends(User2, _super);
    function User2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User2.prototype, "setTeam", {
        set: function (naam) {
            this.team = naam; //team only accessed inside UserInheriate and User2 class
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User2.prototype, "getTeam", {
        get: function () {
            return this.team;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}(UserInheriate));
var Jadeja = new User2("Ravindra J", "j@ravi.com");
Jadeja.role = "all rounder";
console.log(Jadeja.abc);
Jadeja.xyz = 333;
console.log(Jadeja.abc);
console.log(Jadeja.role);
console.log(Jadeja.name);
Jadeja.setTeam = "CSK";
console.log(Jadeja.getTeam);
