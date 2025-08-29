import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const QuestionnaireModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

  // Ресетирај го прашалникот секогаш кога ќе се отвори
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setAnswers({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Функција за зачувување на одговорите
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Функција за поднесување на формата
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Поднесени одговори:', answers); // За демо, ги печати одговорите во конзола
    setIsSubmitted(true);
  };

  const steps = [
    { id: 1, title: "Дел 1: Јаснотија на целта", questions: [ { id:1, text: "Имам јасно разбирање за тоа каква работа би ме исполнувала." }, { id:2, text: "Можам да именувам барем 3 работи кои најмногу ги ценам во идната работа." }] },
    { id: 2, title: "Дел 2: Емоционална подготвеност", questions: [ { id:3, text: "Генерално се чувствувам оптимистично за иднината." }, { id:4, text: "Верувам дека имам вредни вештини и искуства." }] },
    { id: 3, title: "Дел 3: Ментална и физичка благосостојба", questions: [ { id:5, text: "Повеќето денови се чувствувам одморено и физички добро." }, { id:6, text: "Имам стратегии за управување со стресот." }] }
  ];

  // Компонента за групата со оценки (1-5)
  const RatingGroup = ({ qId, selectedValue, onAnswerChange }) => (
    <div className="flex justify-between gap-2">
      {[1, 2, 3, 4, 5].map(value => (
        <div key={value} className="flex-1">
          <input 
            type="radio" 
            id={`q${qId}-${value}`} 
            name={`q${qId}`} 
            value={value} 
            className="hidden" 
            checked={selectedValue === value}
            onChange={() => onAnswerChange(qId, value)}
          />
          <label htmlFor={`q${qId}-${value}`} className={`block border ${selectedValue === value ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-300 hover:bg-slate-100'} py-2 text-center cursor-pointer transition-all duration-200 rounded-md font-medium`}>{value}</label>
        </div>
      ))}
    </div>
  );
  
  // Компонента за приказ на успешна порака
  const SuccessView = () => (
    <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full">
        <div className="bg-emerald-100 p-4 rounded-full">
            <Icon name="check-circle" className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mt-6">Ви благодариме!</h2>
        <p className="text-slate-500 mt-2 mb-8">Вашиот прашалник е успешно поднесен. Вашите одговори се зачувани.</p>
        <button onClick={onClose} className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition">Затвори</button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center animate-fade-in">
      <div className="fixed inset-0 bg-black bg-opacity-60" onClick={onClose}></div>
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:max-w-2xl mx-auto z-50 overflow-y-auto max-h-[90vh] animate-fade-in-up">
        {isSubmitted ? <SuccessView /> : (
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-slate-800">Прашалник за подготвеност</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><Icon name="x" className="h-6 w-6 text-slate-500" /></button>
            </div>
            <p className="text-slate-500 mb-6">Направете проверка на вашата емоционална, ментална и мотивациска состојба.</p>
            <form onSubmit={handleSubmit}>
              {steps.map(step => (
                  <div key={step.id} style={{ display: currentStep === step.id ? 'block' : 'none' }}>
                      <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-4">{step.title}</h3>
                      <div className="space-y-6">
                          {step.questions.map((q, index) => (
                               <div key={q.id}>
                                  <p className="font-medium text-slate-800 mb-2">{index + 1}. {q.text}</p>
                                  <RatingGroup qId={q.id} selectedValue={answers[q.id]} onAnswerChange={handleAnswerChange} />
                                  {index === 0 && <div className="flex justify-between text-sm text-slate-500 mt-1 px-1"><span>Не се согласувам</span><span>Се согласувам</span></div>}
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
              <div className="mt-8 pt-4 border-t flex justify-between items-center">
                <button type="button" onClick={() => setCurrentStep(s => s - 1)} className={`bg-slate-200 text-slate-800 font-semibold py-2 px-5 rounded-lg hover:bg-slate-300 transition ${currentStep === 1 ? 'invisible' : ''}`}>Назад</button>
                <div className="text-sm text-slate-500">Чекор {currentStep} од {totalSteps}</div>
                {currentStep < totalSteps && <button type="button" onClick={() => setCurrentStep(s => s + 1)} className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition">Следно</button>}
                {currentStep === totalSteps && <button type="submit" className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition">Поднеси</button>}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireModal;

