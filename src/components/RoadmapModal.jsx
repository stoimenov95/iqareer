import React from 'react';
import Icon from './Icon';

const RoadmapModal = ({ isOpen, onClose, roadmap }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center animate-fade-in">
      <div className="fixed inset-0 bg-black bg-opacity-60" onClick={onClose}></div>
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:max-w-3xl mx-auto z-50 overflow-y-auto max-h-[90vh] animate-fade-in-up">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start pb-4 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className={`bg-${roadmap.color}-100 p-3 rounded-lg w-fit`}>
                <Icon name={roadmap.icon} className={`h-8 w-8 text-${roadmap.color}-600`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{roadmap.title}</h2>
                <p className="text-slate-500 mt-1">{roadmap.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><Icon name="x" className="h-6 w-6 text-slate-500" /></button>
          </div>

          {/* Stepper/Timeline for Phases */}
          <div className="space-y-4">
            {roadmap.phases.map((phase, index) => (
              <div key={index} className="relative pl-12">
                {/* Stepper Line */}
                {index < roadmap.phases.length - 1 && (
                  <div className={`absolute left-[22px] top-12 h-full border-l-2 border-dashed border-slate-300`}></div>
                )}
                {/* Stepper Icon */}
                <div className={`absolute left-0 top-3 w-12 h-12 rounded-full bg-${roadmap.color}-500 text-white flex items-center justify-center font-bold text-lg ring-8 ring-white`}>
                  {index + 1}
                </div>
                
                {/* Phase Content Card */}
                <div className="ml-4 bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">{phase.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center font-semibold text-slate-600 text-sm mb-2">
                        <Icon name="award" className="mr-2 h-4 w-4 text-slate-400" />
                        Клучни вештини:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map(skill => (
                          <span key={skill} className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                        <h4 className="flex items-center font-semibold text-slate-600 text-sm mb-2">
                            <Icon name="target" className="mr-2 h-4 w-4 text-slate-400" />
                            Предлог-проект:
                        </h4>
                        <p className="text-slate-500 text-sm">{phase.project}</p>
                    </div>
                     <div>
                        <h4 className="flex items-center font-semibold text-slate-600 text-sm mb-2">
                            <Icon name="link" className="mr-2 h-4 w-4 text-slate-400" />
                            Препорачани ресурси:
                        </h4>
                        <a href="#" className="text-sm text-indigo-600 hover:underline">FreeCodeCamp - Responsive Web Design</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-end items-center gap-4">
                <button onClick={onClose} className="bg-slate-200 text-slate-800 font-semibold py-2 px-6 rounded-lg hover:bg-slate-300 transition w-full sm:w-auto">Затвори</button>
                <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto">Започни го овој патоказ</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;

