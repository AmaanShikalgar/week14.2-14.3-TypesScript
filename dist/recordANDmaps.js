"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = new Map();
users.set("21323", { age: 21, name: "amaan" });
users.set("23232", { age: 20, name: "rohan" });
const user = users.get("21323");
users.delete('23232');
console.log(user);
//# sourceMappingURL=recordANDmaps.js.map