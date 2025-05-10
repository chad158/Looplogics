import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LoopLogics() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [circuitResult, setCircuitResult] = useState('');
  const [components, setComponents] = useState('');
  const [functionDesc, setFunctionDesc] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
  };

  const handleGenerateCircuit = () => {
    if (!components || !functionDesc) return;
    setCircuitResult(`Generated circuit based on: ${components} to ${functionDesc}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-400">Loop Logics</h1>
        <p className="text-xl text-gray-300 mt-2">From concept to circuit — instantly.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl mb-4">1. PCB Layout Designer</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            {uploadedImage && (
              <div className="mt-2">
                <img src={uploadedImage} alt="Uploaded Circuit" className="max-h-64" />
                <p className="text-green-400 mt-2">Track layout preview generated (placeholder).</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl mb-4">2. Circuit Generator</h2>
            <input
              type="text"
              placeholder="List components (e.g. resistors, op-amps)"
              value={components}
              onChange={(e) => setComponents(e.target.value)}
              className="w-full p-2 mb-3 text-black"
            />
            <textarea
              placeholder="Describe what the circuit should do"
              value={functionDesc}
              onChange={(e) => setFunctionDesc(e.target.value)}
              className="w-full p-2 mb-3 text-black"
            />
            <Button onClick={handleGenerateCircuit}>Generate Circuit</Button>
            {circuitResult && <p className="mt-4 text-green-400">{circuitResult}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
