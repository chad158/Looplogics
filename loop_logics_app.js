
const app = document.getElementById('app');

let uploadedImage = null;
let circuitResult = '';

function handleImageUpload(event) {
  const file = event.target.files[0];
  uploadedImage = URL.createObjectURL(file);
  document.getElementById('uploadedPreview').src = uploadedImage;
  document.getElementById('previewStatus').innerText = 'Track layout preview generated (placeholder).';
}

function handleGenerateCircuit() {
  const components = document.getElementById('components').value;
  const functionDesc = document.getElementById('functionDesc').value;

  if (!components || !functionDesc) return;
  circuitResult = `Generated circuit based on: ${components} to ${functionDesc}`;
  document.getElementById('circuitOutput').innerText = circuitResult;
}

app.innerHTML = `
  <div style="min-height:100vh;background:#0f172a;color:white;padding:20px;font-family:sans-serif;">
    <header style="text-align:center;margin-bottom:40px;">
      <h1 style="font-size:3rem;color:#60a5fa;">Loop Logics</h1>
      <p style="font-size:1.25rem;color:#d1d5db;">From concept to circuit — instantly.</p>
    </header>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
      <div style="background:#1e293b;padding:20px;border-radius:1rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1rem;">1. PCB Layout Designer</h2>
        <input type="file" accept="image/*" onchange="handleImageUpload(event)" style="margin-bottom:1rem;" />
        <div>
          <img id="uploadedPreview" alt="Uploaded Circuit" style="max-height:250px;display:block;" />
          <p id="previewStatus" style="color:#34d399;margin-top:0.5rem;"></p>
        </div>
      </div>

      <div style="background:#1e293b;padding:20px;border-radius:1rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1rem;">2. Circuit Generator</h2>
        <input id="components" type="text" placeholder="List components (e.g. resistors, op-amps)" style="width:100%;padding:0.5rem;margin-bottom:1rem;color:black;" />
        <textarea id="functionDesc" placeholder="Describe what the circuit should do" style="width:100%;padding:0.5rem;margin-bottom:1rem;color:black;"></textarea>
        <button onclick="handleGenerateCircuit()" style="background:#3b82f6;padding:0.5rem 1rem;border:none;color:white;border-radius:0.5rem;">Generate Circuit</button>
        <p id="circuitOutput" style="margin-top:1rem;color:#34d399;"></p>
      </div>
    </div>
  </div>
`;

window.handleImageUpload = handleImageUpload;
window.handleGenerateCircuit = handleGenerateCircuit;
