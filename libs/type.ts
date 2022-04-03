export interface QuestionResponse {
    questions: Question[];
}

export interface Question {
    id: number;
    name: string;
    answers: string[];
    correct: string;
    selectedAnswer?: string;
}
