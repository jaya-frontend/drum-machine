function playSound(audioEl) {
    if (!audioEl) return;
      audioEl.currentTime = 0;
        audioEl.play();
          
            const display = document.getElementById('display');
              if (display && audioEl.parentElement) {
                  display.innerText = audioEl.parentElement.id;
                    }
                    }

                    // Click event listener for drum pads
                    document.querySelectorAll('.drum-pad').forEach(pad => {
                      pad.addEventListener('click', () => {
                          const audio = pad.querySelector('.clip');
                              playSound(audio);
                                });
                                });

                                // Keydown event listener for keyboard keys
                                document.addEventListener('keydown', (e) => {
                                  const key = e.key.toUpperCase();
                                    const audio = document.getElementById(key);
                                      if (audio && audio.classList.contains('clip')) {
                                          playSound(audio);
                                            }
                                            });
