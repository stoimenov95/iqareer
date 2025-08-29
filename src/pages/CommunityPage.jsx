import React from 'react';
import Icon from '../components/Icon';

const CommunityPage = () => (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Заедница</h1>
        <p className="mt-2 text-slate-500">Поврзете се, споделете искуства и учете од другите.</p>
        <div className="mt-8">
            <button className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition flex items-center">
                <Icon name="plus" className="mr-2 h-5 w-5" /> Започни нова дискусија
            </button>
        </div>
        <div className="mt-6 bg-white rounded-lg border border-slate-200">
            <ul className="divide-y divide-slate-200">
                <li className="p-4 hover:bg-slate-50 cursor-pointer">
                    <p className="font-medium text-slate-800">Како да се подготвам за првото техничко интервју?</p>
                    <p className="text-sm text-slate-500 mt-1">Започнато од Зоран П. • 2 одговори • Последна активност: пред 1 час</p>
                </li>
                <li className="p-4 hover:bg-slate-50 cursor-pointer">
                    <p className="font-medium text-slate-800">Дали вреди да се учи економија и Data Science паралелно?</p>
                    <p className="text-sm text-slate-500 mt-1">Започнато од Мартина К. • 5 одговори • Последна активност: пред 3 часа</p>
                </li>
            </ul>
        </div>
    </div>
);

export default CommunityPage;
