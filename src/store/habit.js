import { getHabit, getHabits } from "@/services/habit.service"

const mutations = {
    setHabit(state, habit) {
        state.habit = habit
    },
    setHabits(state, habits) {
        state.habits = habits
    },
    setHabitError(state, error) {
        state.err = error
    }
}

const actions = {
    async fetchHabit({ commit }, id) {
        try {
            const habit = await getHabit(id)
            commit('setHabit', habit)
        } catch (err) {
            commit('setHabitError', err)
        }
    },

    async fetchHabits() {
        try {
            const habits = await getHabits()
            commit('setHabits', habits)
        } catch (err) {
            commit('setHabitError', err)
        }
    }
}

const getters = {
    habit: ({ habit }) => habit,
    habits: ({ habits }) => habits,
    habitError: ({ habitError }) => habitError,
}

const state = () => ({
    habit: {},
    habits: [],
    habitError: null,
})


export default {
    mutations,
    getters,
    actions,
    state
}