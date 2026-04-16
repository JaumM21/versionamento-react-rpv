'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CounterWithHistory() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const handleIncrement = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    setHistory([...history, newValue]);
  };

  const handleDecrement = () => {
    const newValue = counter - 1;
    setCounter(newValue);
    setHistory([...history, newValue]);
  };

  const handleReset = () => {
    setCounter(0);
    setHistory([]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Voltar
        </Link>

        <div className="bg-white rounded-md border border-zinc-300 p-8">
          <h1 className="text-3xl font-bold mb-6">Counter com Histórico</h1>

          {/* Counter Display */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Valor Atual</p>
            <p className="text-6xl font-bold text-blue-600">{counter}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleDecrement}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md"
            >
              -
            </button>
            <button
              onClick={handleIncrement}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md"
            >
              +
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md mb-8"
          >
            Resetar
          </button>

          {/* History Section */}
          <div className="border-t border-zinc-300 pt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Histórico</h2>
              {history.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md"
                >
                  Limpar
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="text-gray-500 text-center">Nenhuma operação realizada</p>
            ) : (
              <div className="bg-gray-100 rounded-md p-4 max-h-64 overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {history.map((value, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
