import React, { useState } from 'react';
import Icon from '../components/Icon';

// Податоци за квизот
const quizData = [
  {
    question: "На кој час најмногу уживавте во средно училиште?",
    answers: [
      { text: "Ликовно или музичко", category: "Creative" },
      { text: "Математика или физика", category: "Technical" },
      { text: "Историја или социологија", category: "Analytical" },
      { text: "Тимски спорт или биологија", category: "Social" },
    ],
  },
  {
    question: "Каков тип на проблем преферирате да решавате?",
    answers: [
      { text: "Визуелен или естетски предизвик", category: "Creative" },
      { text: "Логичка загатка со јасен одговор", category: "Technical" },
      { text: "Комплексен проблем со многу податоци", category: "Analytical" },
      { text: "Проблем што вклучува разбирање на луѓе", category: "Social" },
    ],
  },
  {
    question: "Кога работите на проект, што ви е најважно?",
    answers: [
      { text: "Слобода да експериментирам и да бидам оригинален", category: "Creative" },
      { text: "Да имам јасни чекори и ефикасен процес", category: "Technical" },
      { text: "Да го разберам проблемот во длабочина пред да почнам", category: "Analytical" },
      { text: "Да соработувам со други и да имам добра тимска атмосфера", category: "Social" },
    ],
  },
  {
    question: "Каква работна околина ви звучи најидеално?",
    answers: [
      { text: "Динамично студио, агенција или флексибилна работа од дома", category: "Creative" },
      { text: "Технолошка компанија со фокус на иновации и развој", category: "Technical" },
      { text: "Истражувачки центар, финансиска институција или консултантска фирма", category: "Analytical" },
      { text: "Непрофитна организација, училиште или болница", category: "Social" },
    ],
  },
];

const resultsData = {
    Creative: {
        title: "Креативен тип",
        description: "Уживате во создавање, дизајн и решавање на визуелни проблеми. Вашата идеална кариера вклучува иновација и оригиналност.",
        icon: "pen-tool",
        color: "text-purple-600",
        path: "UX/UI Дизајнер, Графички дизајнер, Content Creator"
    },
    Technical: {
        title: "Технички тип",
        description: "Ве привлекуваат логички системи, технологија и градење на функционални решенија. Уживате во процесот на решавање на конкретни проблеми.",
        icon: "code",
        color: "text-indigo-600",
        path: "Front-End/Back-End програмер, QA инженер, DevOps"
    },
    Analytical: {
        title: "Аналитички тип",
        description: "Вашата сила лежи во работа со податоци, истражување и донесување одлуки базирани на информации. Сакате да ја видите „големата слика“.",
        icon: "bar-chart-2",
        color: "text-sky-600",
        path: "Data Analyst, Бизнис аналитичар, Финансиски аналитичар"
    },
    Social: {
        title: "Социјален тип",
        description: "Најдобро функционирате кога соработувате со луѓе и помагате на други. Ве исполнува работа која има директно влијание врз заедницата.",
        icon: "users",
        color: "text-emerald-600",
        path: "Проектен менаџер, HR специјалист, Наставник"
    }
}


const QuizzesPage = () => {
    const [quizState, setQuizState] = useState('start'); // 'start', 'active', 'finished'
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ Creative: 0, Technical: 0, Analytical: 0, Social: 0 });
    const [result, setResult] = useState(null);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScores({ Creative: 0, Technical: 0, Analytical: 0, Social: 0 });
        setResult(null);
        setQuizState('active');
    };

    const handleAnswerClick = (category) => {
        const newScores = { ...scores, [category]: scores[category] + 1 };
        setScores(newScores);

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            calculateResult(newScores);
            setQuizState('finished');
        }
    };
    
    const calculateResult = (finalScores) => {
        const winner = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
        setResult(resultsData[winner]);
    };

    if (quizState === 'start') {
        return (
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Квизови за кариера</h1>
                <p className="mt-2 text-slate-500">Откријте ги вашите силни страни и интереси за да ја пронајдете идеалната кариера.</p>
                <div className="mt-8 max-w-2xl">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">Тест за интереси и вештини</h3>
                            <p className="text-slate-500 mt-1">5-минутен тест кој ќе ви помогне да добиете насока.</p>
                        </div>
                        <button onClick={startQuiz} className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto flex-shrink-0">Започни</button>
                    </div>
                </div>
            </div>
        );
    }
    
    if (quizState === 'finished' && result) {
        return (
             <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Резултати од квизот</h1>
                 <div className="mt-8 max-w-2xl bg-white rounded-lg border border-slate-200 p-8 text-center">
                    <div className={`mx-auto bg-${result.color.split('-')[1]}-100 p-4 rounded-full w-fit`}>
                       <Icon name={result.icon} className={`h-10 w-10 ${result.color}`} />
                    </div>
                    <h2 className={`mt-4 text-2xl font-bold ${result.color}`}>{result.title}</h2>
                    <p className="mt-2 text-slate-600">{result.description}</p>
                    <div className="mt-6 text-left bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-slate-500">ПРЕПОРАЧАНИ ПАТОКАЗИ:</p>
                        <p className="mt-1 font-medium text-slate-800">{result.path}</p>
                    </div>
                    <button onClick={startQuiz} className="mt-8 bg-slate-200 text-slate-800 font-semibold py-2 px-5 rounded-lg hover:bg-slate-300 transition w-full sm:w-auto">Повтори го квизот</button>
                 </div>
            </div>
        )
    }

    const currentQuestion = quizData[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Квиз за интереси и вештини</h1>
            <div className="mt-8 max-w-2xl">
                 {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">Прашање {currentQuestionIndex + 1} од {quizData.length}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-8">
                    <h2 className="text-xl font-bold text-slate-800 leading-relaxed">{currentQuestion.question}</h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentQuestion.answers.map((answer, index) => (
                            <button 
                                key={index} 
                                onClick={() => handleAnswerClick(answer.category)}
                                className="w-full text-left p-4 rounded-lg border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition font-medium text-slate-700"
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizzesPage;

