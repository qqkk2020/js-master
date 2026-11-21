// Модуль бізнес-логіки тестування тренажера JSMaster
export function validateAnswer(selectedAnswer, correctAnswer) {
    if (!selectedAnswer) return false;
    return String(selectedAnswer).trim().toLowerCase() === String(correctAnswer).trim().toLowerCase();
}

export function calculateScorePercentage(score, total) {
    if (!total || total <= 0) return 0;
    return Math.round((score / total) * 100);
}
