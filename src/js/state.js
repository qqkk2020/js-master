// Менеджер стану навчального застосунку JSMaster (Lab 8)
const STORAGE_KEY = "jsmaster_progress";

export const state = {
    currentTopicId: null,
    currentQuestionIndex: 0,
    score: 0,
    topicsData: [],
    progress: {},

    initProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            this.progress = raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.warn("Помилка читання localStorage:", e);
            this.progress = {};
        }
    },

    saveProgress(topicId, score, total) {
        if (!this.progress) this.progress = {};
        const safeTotal = total || 4;
        this.progress[topicId] = {
            score,
            total: safeTotal,
            percentage: Math.round((score / safeTotal) * 100),
            updatedAt: new Date().toISOString()
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
        } catch (e) {
            console.warn("Помилка запису в localStorage:", e);
        }
    }
};
