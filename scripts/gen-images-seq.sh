#!/bin/bash
export PATH=$(echo "$PATH" | tr ':' '\n' | grep -v superset | tr '\n' ':')
cd /Users/sorang/Desktop/hospital/dental-clinic
LOG=/tmp/gen-images-seq.log
: > "$LOG"
OUT=public/images

gen() {
  local name="$1" prompt="$2"
  if [ -f "$OUT/$name.png" ]; then
    echo "[$(date +%H:%M:%S)] skip: $name.png exists" >> "$LOG"
    return 0
  fi
  for attempt in 1 2 3; do
    echo "[$(date +%H:%M:%S)] try $attempt: $name" >> "$LOG"
    rm -f "$OUT"/codex-gpt-image-2-*.png 2>/dev/null
    oma image generate --vendor codex --size 1024x1024 --quality high -n 1 --out "$OUT" --yes "$prompt" >> "$LOG" 2>&1
    local latest
    latest=$(ls -t "$OUT"/codex-gpt-image-2-*.png 2>/dev/null | head -1)
    if [ -n "$latest" ]; then
      mv "$latest" "$OUT/$name.png"
      echo "[$(date +%H:%M:%S)] done: $name.png" >> "$LOG"
      sleep 3
      return 0
    fi
    echo "[$(date +%H:%M:%S)] retry after fail: $name" >> "$LOG"
    sleep 10
  done
  echo "[$(date +%H:%M:%S)] GIVE UP: $name" >> "$LOG"
  return 1
}

gen "prosthodontics" "Minimal monochrome editorial close-up of a polished ceramic dental crown laid on smooth off-white linen, soft diffused natural daylight from upper left, gentle charcoal shadow, abstract macro, magazine quality, Aesop boutique aesthetic, no people, no text"

gen "orthodontics" "Minimal monochrome editorial close-up of a transparent clear aligner orthodontic tray resting on smooth off-white linen, soft diffused natural daylight, subtle charcoal shadow, abstract macro, magazine quality, Aesop boutique aesthetic, no people, no text"

gen "general" "Minimal monochrome editorial composition of a dental hand mirror and probe arranged neatly on smooth off-white linen, soft diffused natural daylight from upper right, gentle charcoal shadow, abstract macro, magazine quality, Aesop boutique aesthetic, no people, no text"

gen "doctor-park" "Editorial portrait of a Korean male dentist in his late 30s, short clean black hair, calm intellectual expression, wearing a crisp white medical gown, three-quarter angle, looking slightly off camera, soft natural window light from the left, off-white seamless background, charcoal shadows, magazine quality, Aesop boutique aesthetic, no logo, no text"

gen "doctor-lee" "Editorial portrait of a Korean female dentist in her early 30s, soft tied-back dark hair, calm composed expression, wearing a crisp white medical gown, three-quarter angle, looking slightly off camera, soft natural window light from the right, off-white seamless background, charcoal shadows, magazine quality, Aesop boutique aesthetic, no logo, no text"

gen "interior" "Minimal interior corner of a high-end boutique dental clinic waiting area, off-white walls, oak wood bench, single charcoal accent line, large window with soft diffused daylight, no people, no text, no logo, editorial architectural photography, Aesop boutique aesthetic"

gen "equipment" "Minimal editorial close-up of a precision dental chair arm and operating light fixture, brushed stainless steel surfaces, off-white background, soft diffused daylight, gentle charcoal shadows, no people, no text, magazine quality, Aesop boutique aesthetic"

gen "sterilization" "Minimal interior of a clinical sterilization room, neatly aligned stainless steel sterilization pouches and instruments on an off-white counter, single charcoal accent line, soft diffused daylight, no people, no text, no logo, editorial photography, Aesop boutique aesthetic"

gen "location" "Minimal architectural exterior detail of a high-end boutique building facade in Cheongdam Seoul, off-white limestone wall, single discreet charcoal sign mount with no readable text, oak entrance frame, soft diffused daylight, no people, no readable text, editorial photography, Aesop boutique aesthetic"

echo "[$(date +%H:%M:%S)] ALL DONE" >> "$LOG"
