// --- Shared Audio Visualizer Logic ---
function drawFlatLine(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#2c2e31'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.strokeStyle = '#646669'; 
    ctx.beginPath(); ctx.moveTo(10, canvas.height / 2); ctx.lineTo(canvas.width - 10, canvas.height / 2); ctx.stroke();
}

window.addEventListener('load', () => {
    const mC = document.getElementById('mic-visualizer');
    const sC = document.getElementById('speaker-visualizer');
    mC.width = mC.offsetWidth; mC.height = mC.offsetHeight;
    sC.width = sC.offsetWidth; sC.height = sC.offsetHeight;
    drawFlatLine('mic-visualizer'); drawFlatLine('speaker-visualizer');
});

function drawWaveform(analyser, canvasId, animationRefObj) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    analyser.fftSize = 128; 
    const bufferLength = analyser.frequencyBinCount; 
    const dataArray = new Uint8Array(bufferLength);
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#e2b714'); gradient.addColorStop(0.5, '#d1d0c5'); gradient.addColorStop(1, '#e2b714');

    function draw() {
        animationRefObj.id = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray); 
        ctx.fillStyle = '#2c2e31'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        const barWidth = canvas.width / bufferLength; let x = 0;
        ctx.lineCap = 'round'; ctx.strokeStyle = gradient; ctx.lineWidth = barWidth * 0.6; 
        
        for(let i = 0; i < bufferLength; i++) {
            let barHeight = (dataArray[i] / 255) * (canvas.height * 0.8);
            if (barHeight < 4) barHeight = 4; 
            ctx.beginPath();
            ctx.moveTo(x + (barWidth / 2), (canvas.height / 2) - (barHeight / 2));
            ctx.lineTo(x + (barWidth / 2), (canvas.height / 2) + (barHeight / 2));
            ctx.stroke(); x += barWidth;
        }
    }
    draw();
}

// --- Shared Device Enumeration ---
async function getDevices() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const camSelect = document.getElementById('camera-select');
        const micSelect = document.getElementById('mic-select');
        const currentCam = camSelect.value; const currentMic = micSelect.value;
        camSelect.innerHTML = ''; micSelect.innerHTML = '';
        let camCount = 1; let micCount = 1;

        devices.forEach(device => {
            const option = document.createElement('option');
            option.value = device.deviceId;
            let label = device.label;
            if (!label) {
                if (device.kind === 'videoinput') label = `camera ${camCount++}`;
                if (device.kind === 'audioinput') label = `microphone ${micCount++}`;
            }
            option.text = label.toLowerCase();
            if (device.kind === 'videoinput') camSelect.appendChild(option);
            if (device.kind === 'audioinput') micSelect.appendChild(option);
        });

        if (currentCam) camSelect.value = currentCam;
        if (currentMic) micSelect.value = currentMic;
    } catch (err) { console.warn("Could not load devices.", err); }
}
window.addEventListener('load', getDevices);

// --- 1. Dead Pixel Test ---
const dpScreens = [
    { name: 'red', style: 'background: red;' }, { name: 'green', style: 'background: green;' },
    { name: 'blue', style: 'background: blue;' }, { name: 'cyan', style: 'background: cyan;' }, 
    { name: 'magenta', style: 'background: magenta;' }, { name: 'yellow', style: 'background: yellow;' },
    { name: 'white', style: 'background: white;' }, { name: 'black', style: 'background: black;' },
    { name: 'checkerboard', style: 'background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 40px 40px;' },
    { name: 'gradient', style: 'background: linear-gradient(to right, black, white);' }
];
let dpIndex = 0; let dpElement = null; const dpLabel = document.getElementById('dp-label');
function updateDpScreen() {
    dpElement.style = `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; cursor: none; ${dpScreens[dpIndex].style}`;
    dpLabel.style.display = 'block'; dpLabel.innerText = dpScreens[dpIndex].name;
}
function startDeadPixelTest() {
    dpIndex = 0; dpElement = document.createElement('div');
    document.body.appendChild(dpElement); updateDpScreen(); dpElement.appendChild(dpLabel);
    dpElement.requestFullscreen().catch(err => alert('Fullscreen failed: ' + err.message));
}
document.addEventListener('keydown', (e) => {
    if (document.fullscreenElement === dpElement) {
        if (e.code === 'ArrowRight' || e.code === 'Space') { dpIndex = (dpIndex + 1) % dpScreens.length; updateDpScreen(); } 
        else if (e.code === 'ArrowLeft') { dpIndex = (dpIndex - 1 + dpScreens.length) % dpScreens.length; updateDpScreen(); }
    }
});
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && dpElement) {
        document.body.removeChild(dpElement); document.body.appendChild(dpLabel);
        dpLabel.style.display = 'none'; dpElement = null;
    }
});

// --- 2. Keyboard & Touchpad Test ---
document.addEventListener('keydown', (e) => {
    if (document.fullscreenElement) return; e.preventDefault();
    const keyEl = document.getElementById(e.code);
    if (keyEl) { keyEl.classList.add('tested'); keyEl.classList.add('active-press'); }
});
document.addEventListener('keyup', (e) => {
    if (document.fullscreenElement) return; e.preventDefault(); 
    const keyEl = document.getElementById(e.code);
    if (keyEl) { keyEl.classList.remove('active-press'); }
});
const touchpad = document.getElementById('touchpad');
function handleTouchpadDown(btnId) { const btn = document.getElementById(btnId); btn.classList.add('tested'); btn.classList.add('active-press'); }
function handleTouchpadUp(btnId) { document.getElementById(btnId).classList.remove('active-press'); }
touchpad.addEventListener('mousedown', (e) => {
    if (e.button === 0) handleTouchpadDown('mouse-left');
    if (e.button === 1) handleTouchpadDown('mouse-middle');
    if (e.button === 2) handleTouchpadDown('mouse-right');
});
touchpad.addEventListener('mouseup', (e) => {
    if (e.button === 0) handleTouchpadUp('mouse-left');
    if (e.button === 1) handleTouchpadUp('mouse-middle');
    if (e.button === 2) handleTouchpadUp('mouse-right');
});

// --- 3. Camera Test ---
let camStream = null;
async function startCamera() {
    const deviceId = document.getElementById('camera-select').value;
    const constraints = { video: deviceId ? { deviceId: { exact: deviceId } } : true };
    try { 
        camStream = await navigator.mediaDevices.getUserMedia(constraints); 
        document.getElementById('webcam-video').srcObject = camStream; 
        document.getElementById('cam-enable').disabled = true; document.getElementById('cam-disable').disabled = false;
        getDevices(); 
    } catch (err) { alert("Camera error: " + err.message); }
}
function stopCamera() { 
    if (camStream) { 
        camStream.getTracks().forEach(t => t.stop()); document.getElementById('webcam-video').srcObject = null; 
        document.getElementById('cam-enable').disabled = false; document.getElementById('cam-disable').disabled = true;
    } 
}

// --- 4. Mic Test & Custom Audio Player Logic ---
let mediaRecorder; let audioChunks = []; let micStream = null;
let micCtx; let micAnimRef = { id: null };
let micAnalyser = null; let playbackSourceNode = null; let isPlaybackSetup = false;
const audioPlayback = document.getElementById('audio-playback'); const playBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar'); const currTime = document.getElementById('current-time'); const durTime = document.getElementById('duration');

function fmtTime(sec) {
    if (isNaN(sec) || !isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60); const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

async function startRecording() {
    const deviceId = document.getElementById('mic-select').value;
    const constraints = { audio: deviceId ? { deviceId: { exact: deviceId } } : true };
    try {
        micStream = await navigator.mediaDevices.getUserMedia(constraints); getDevices();
        
        document.getElementById('mic-player-ui').style.display = 'none';
        if (!audioPlayback.paused) { audioPlayback.pause(); playBtn.innerText = 'play'; cancelAnimationFrame(micAnimRef.id); drawFlatLine('mic-visualizer');}

        if (!micCtx) micCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (micCtx.state === 'suspended') micCtx.resume();
        
        const source = micCtx.createMediaStreamSource(micStream);
        if (!micAnalyser) micAnalyser = micCtx.createAnalyser();
        source.connect(micAnalyser); drawWaveform(micAnalyser, 'mic-visualizer', micAnimRef);

        mediaRecorder = new MediaRecorder(micStream);
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            audioPlayback.src = URL.createObjectURL(audioBlob);
            document.getElementById('mic-player-ui').style.display = 'flex';
        };
        
        audioChunks = []; mediaRecorder.start();
        document.getElementById('btn-record').disabled = true; document.getElementById('btn-stop-record').disabled = false;
    } catch (err) { alert("Mic error: " + err.message); }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop(); micStream.getTracks().forEach(t => t.stop());
        cancelAnimationFrame(micAnimRef.id); drawFlatLine('mic-visualizer');
        document.getElementById('btn-record').disabled = false; document.getElementById('btn-stop-record').disabled = true;
    }
}

function togglePlay() {
    if (micCtx && micCtx.state === 'suspended') micCtx.resume();
    if (!isPlaybackSetup) {
        playbackSourceNode = micCtx.createMediaElementSource(audioPlayback);
        if (!micAnalyser) micAnalyser = micCtx.createAnalyser();
        playbackSourceNode.connect(micAnalyser); playbackSourceNode.connect(micCtx.destination); 
        isPlaybackSetup = true;
    }

    if (audioPlayback.paused) { 
        audioPlayback.play(); playBtn.innerText = 'pause'; drawWaveform(micAnalyser, 'mic-visualizer', micAnimRef);
    } else { 
        audioPlayback.pause(); playBtn.innerText = 'play'; cancelAnimationFrame(micAnimRef.id); drawFlatLine('mic-visualizer');
    }
}

audioPlayback.addEventListener('timeupdate', () => { seekBar.value = audioPlayback.currentTime; currTime.innerText = fmtTime(audioPlayback.currentTime); });
audioPlayback.addEventListener('loadedmetadata', () => { seekBar.max = audioPlayback.duration; durTime.innerText = fmtTime(audioPlayback.duration); });
audioPlayback.addEventListener('ended', () => { playBtn.innerText = 'play'; seekBar.value = 0; cancelAnimationFrame(micAnimRef.id); drawFlatLine('mic-visualizer'); });
seekBar.addEventListener('input', () => { audioPlayback.currentTime = seekBar.value; });

// --- 5. Speaker Test ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = new Audio('cipher.mp3');
audioElement.crossOrigin = "anonymous"; audioElement.loop = true;

let isAudioSetup = false; let panner = null; let spkAnalyser = null; let spkAnimRef = { id: null };
function updateVolume(val) { audioElement.volume = val; }

function testSpeaker(channel) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (channel === 'stop') {
        audioElement.pause(); audioElement.currentTime = 0; 
        cancelAnimationFrame(spkAnimRef.id); drawFlatLine('speaker-visualizer'); return;
    }
    if (!isAudioSetup) {
        const track = audioCtx.createMediaElementSource(audioElement);
        panner = audioCtx.createStereoPanner(); spkAnalyser = audioCtx.createAnalyser();
        track.connect(panner).connect(spkAnalyser).connect(audioCtx.destination);
        drawWaveform(spkAnalyser, 'speaker-visualizer', spkAnimRef); isAudioSetup = true;
    } else {
        if (audioElement.paused) drawWaveform(spkAnalyser, 'speaker-visualizer', spkAnimRef);
    }
    
    if (channel === 'left') panner.pan.value = -1;
    else if (channel === 'right') panner.pan.value = 1;
    else panner.pan.value = 0;

    audioElement.currentTime = 0;
    audioElement.play().catch(err => console.warn("Audio play blocked:", err));
}