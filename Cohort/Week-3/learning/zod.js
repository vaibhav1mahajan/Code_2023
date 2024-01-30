const zod = require('zod');
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
});
const obj = {
    email: "1vaoi@g.in",
    password: "fasdfadfafdsfa",
    country: "IN"
}
const response = schema.safeParse(obj);
console.log(response);


const schema1 = zod.string().email().min(5);
const response1 = schema1.safeParse("d@f.com")
console.log(response1);
