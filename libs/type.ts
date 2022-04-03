export interface QuestionResponse {
    error?: string | null;
    questions: Question[];
}

export interface Question {
    id: number;
    name: string;
    answers: string[];
    correct: string;
    selectedAnswer?: string;
}
