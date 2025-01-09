var vk = {
    id: 18,
    name: "virat",
    trail: function () {
        return this.id;
    },
    getMethod: function (xyz) {
        return "hello ".concat(xyz);
    }
};
console.log(vk.name);
