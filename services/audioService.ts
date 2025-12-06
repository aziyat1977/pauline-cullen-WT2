class AudioService {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
      this.masterGain.gain.value = 0.3; // volume
    }
  }

  private resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(e => console.warn("Audio resume failed", e));
    }
  }

  playHover() {
    this.init();
    this.resume();
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playSuccess() {
    this.init();
    this.resume();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    
    // Chord
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.connect(gain);
      gain.connect(this.masterGain!);
      
      osc.type = 'triangle';
      osc.frequency.value = freq;
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.1 + (i*0.05));
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
      
      osc.start(now);
      osc.stop(now + 1.5);
    });
  }

  playClick() {
    this.init();
    this.resume();
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.type = 'square';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

export const audio = new AudioService();