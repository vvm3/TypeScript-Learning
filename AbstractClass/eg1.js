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
var Team = /** @class */ (function () {
    //abstarct class
    function Team(captain, staff, name) {
        this.captain = captain;
        this.staff = staff;
        this.name = name;
    }
    //normal methods also exists in abstract class
    Team.prototype.xyz = function (naam) {
        return naam;
    };
    return Team;
}());
//abstarct class can not create object
// let RR = new Team("sanju", 20, "Rajsthan");
var Winner = /** @class */ (function (_super) {
    __extends(Winner, _super);
    function Winner(captain, staff, name, price) {
        var _this = _super.call(this, captain, staff, name) || this;
        _this.captain = captain;
        _this.staff = staff;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    Winner.prototype.abc = function () {
        //override the abstract method from abstract class Team
        console.log("winner");
    };
    return Winner;
}(Team));
var csk = new Winner("MSD", 28, "Chennai", 100000);
csk.abc();
console.log(csk.xyz("CSK"));
