#!/bin/bash
cd /Users/sorang/Desktop/hospital/dental-clinic
LOG=/tmp/gen-images-higgs.log
: > "$LOG"
OUT=public/images
MODEL=nano_banana_2

gen() {
  local name="$1" prompt="$2"
  if [ -f "$OUT/$name.png" ]; then
    echo "[$(date +%H:%M:%S)] skip: $name.png exists" >> "$LOG"
    return 0
  fi
  echo "[$(date +%H:%M:%S)] start: $name" >> "$LOG"
  local out
  out=$(higgsfield generate create "$MODEL" --prompt "$prompt" --resolution 2k --aspect_ratio 1:1 --wait 2>&1)
  echo "$out" >> "$LOG"
  local url
  url=$(echo "$out" | grep -oE 'https://[^ ]+\.(jpg|jpeg|png|webp)' | head -1)
  if [ -n "$url" ]; then
    curl -sL -o "$OUT/$name.png" "$url"
    echo "[$(date +%H:%M:%S)] done: $name.png  ($url)" >> "$LOG"
  else
    echo "[$(date +%H:%M:%S)] FAIL: $name  no URL in output" >> "$LOG"
  fi
}

gen "orthodontics" "Editorial macro photograph: transparent clear aligner orthodontic tray laid flat on soft off-white linen fabric, soft diffused natural daylight from upper right, gentle charcoal shadow, abstract product photography, minimal monochrome, Aesop boutique aesthetic, magazine quality. No people, no text, no logo." &
P1=$!

gen "general" "Editorial still life photograph: polished stainless steel dental hand mirror and a dental probe arranged neatly on soft off-white linen fabric, soft diffused natural daylight, gentle charcoal shadow, abstract macro composition, minimal monochrome, Aesop boutique aesthetic. No people, no text, no logo." &
P2=$!

gen "doctor-park" "Editorial studio portrait of a Korean man in his late 30s, short clean black hair, calm intellectual expression, wearing a plain crisp white medical doctor's coat with no embroidery and no text, three-quarter angle, looking slightly off camera, soft natural window light from the left, plain off-white seamless studio background, charcoal shadows, magazine quality, Aesop boutique aesthetic. No text on clothing, no logo, no label, no readable writing." &
P3=$!

gen "equipment" "Editorial macro photograph of a precision dental chair arm joint and the operating light fixture above it, brushed stainless steel surfaces, soft off-white background, soft diffused natural daylight, gentle charcoal shadows, minimal monochrome, abstract close-up, Aesop boutique aesthetic. No people, no text, no logo." &
P4=$!

gen "sterilization" "Editorial interior photograph of a clinical sterilization room, neatly aligned rows of sealed stainless steel sterilization pouches and surgical instruments resting on an off-white counter, single charcoal accent line on the wall, soft diffused natural daylight from upper left, minimal monochrome, Aesop boutique aesthetic. No people, no text, no logo, no readable labels." &
P5=$!

gen "location" "Editorial architectural exterior photograph of a high-end boutique building facade in Cheongdam Seoul, off-white limestone wall, oak entrance door frame, soft diffused daylight, calm empty street, minimal monochrome, Aesop boutique aesthetic. No people, no signage, no logo, no readable text of any kind." &
P6=$!

wait $P1 $P2 $P3 $P4 $P5 $P6
echo "[$(date +%H:%M:%S)] ALL DONE" >> "$LOG"
