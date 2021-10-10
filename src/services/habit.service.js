import { request } from "./generic.service";

const getHabit = (id) => request({ url: `habits/${id}`, method: "get" })
const getHabits = (id) => request({ url: `habits`, method: "get" })

export {
    getHabit,
    getHabits
}