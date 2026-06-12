#!/bin/bash
export PATH=$(echo "$PATH" | tr ':' '\n' | grep -v superset | tr '\n' ':')
cd /Users/sorang/Desktop/hospital/dental-clinic
LOG=/tmp/gen-images-v2.log
: > "$LOG"
OUT=public/images

gen() {
  local name="$1" prompt="$2"
  if [ -f "$OUT/$name.png" ]; then
    echo "[$(date +%H:%M:%S)] skip: $name.png exists" >> "$LOG"
    return 0
  fi
  echo "[$(date +%H:%M:%S)] start: $name" >> "$LOG"
  rm -f "$OUT"/codex-gpt-image-2-*.png 2>/dev/null
  oma image generate --vendor codex --size 1024x1024 --quality high -n 1 --out "$OUT" --yes "$prompt" >> "$LOG" 2>&1
  local latest
  latest=$(ls -t "$OUT"/codex-gpt-image-2-*.png 2>/dev/null | head -1)
  if [ -n "$latest" ]; then
    mv "$latest" "$OUT/$name.png"
    echo "[$(date +%H:%M:%S)] done: $name.png" >> "$LOG"
  else
    echo "[$(date +%H:%M:%S)] FAIL: $name" >> "$LOG"
  fi
  sleep 2
}

gen "orthodontics" "Minimal monochrome editorial macro photograph: a transparent clear aligner orthodontic tray laid flat on soft off-white linen fabric, soft diffused natural daylight from upper right, gentle charcoal shadow, abstract product photography. CRITICAL: no person, no human, no doctor, no portrait, no text, no logo, no labels, just the object on linen."

gen "general" "Minimal monochrome editorial still life: a polished stainless steel dental hand mirror and a dental probe arranged neatly on soft off-white linen fabric, soft diffused natural daylight, gentle charcoal shadow, abstract macro composition, magazine quality. CRITICAL: no person, no human, no doctor, no portrait, no text, no logo, no labels, just the objects on linen."

gen "doctor-park" "Editorial studio portrait photograph of a single Korean man in his late 30s, short clean black hair, calm composed expression, wearing a plain crisp white medical doctor gown with NO embroidery and NO text on it, three-quarter angle, looking slightly off camera, soft natural window light from the left, plain off-white seamless studio background, charcoal shadows, magazine quality, Aesop boutique aesthetic. CRITICAL: no text on clothing, no logo, no label, no readable writing anywhere in the image, single person only."

gen "equipment" "Minimal monochrome editorial macro photograph of a precision dental chair arm joint and the operating light fixture above it, brushed stainless steel surfaces, soft off-white background, soft diffused natural daylight, gentle charcoal shadows, abstract close-up. CRITICAL: no person, no human, no doctor, no portrait, no text, no logo, no labels."

gen "sterilization" "Minimal monochrome editorial photograph of a clinical sterilization room: neatly aligned rows of sealed stainless steel sterilization pouches and surgical instruments resting on an off-white counter, single charcoal accent line on the wall, soft diffused natural daylight from upper left, no people, no text, no logo, editorial photography, Aesop boutique aesthetic. CRITICAL: no person visible, no readable text or labels anywhere."

gen "location" "Minimal monochrome architectural exterior photograph of a high-end boutique building facade in Cheongdam Seoul, off-white limestone wall, oak entrance door frame, soft diffused daylight, calm empty street, editorial architectural photography, Aesop boutique aesthetic. CRITICAL: no person, no human, no pedestrian, no text or signage visible, no logo, no readable writing of any kind."

echo "[$(date +%H:%M:%S)] ALL DONE" >> "$LOG"
