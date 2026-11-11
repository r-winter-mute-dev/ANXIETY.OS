import { describe, expect, it } from 'vitest';
import { EXERCISE_ORDER, EXERCISE_SCREENS, FEELINGS, HIDE_HELP_LINK, NEXT_STEPS, orderSymptoms } from '../../src/lib/routes';

describe('Ablauflogik', () => {
  it('Sortieren: jede Antwort bekommt zwei verschiedene nächste Schritte', () => {
    for (const f of FEELINGS) {
      const [a, b] = NEXT_STEPS[f];
      expect(a).not.toBe(b);
      expect(EXERCISE_ORDER).toContain(a);
      expect(EXERCISE_ORDER).toContain(b);
    }
  });

  it('Körperfokus führt zuerst zu den Körpersignalen', () => {
    expect(NEXT_STEPS.body[0]).toBe('symptoms');
  });

  it('Atemhilfe wird nie zuerst angeboten', () => {
    expect(EXERCISE_ORDER.at(-1)).toBe('breathing');
    for (const f of FEELINGS) expect(NEXT_STEPS[f][0]).not.toBe('breathing');
  });

  it('jede Übung ist ein Übungs-Bildschirm (Bildschirm bleibt an)', () => {
    for (const ex of EXERCISE_ORDER) expect(EXERCISE_SCREENS.has(ex)).toBe(true);
  });

  it('Hilfe-Link fehlt nur dort, wo selbst Hilfe steht', () => {
    expect([...HIDE_HELP_LINK].sort()).toEqual(['dark', 'emergency']);
  });

  it('Brustschmerz wird immer zuerst erklärt, Reihenfolge folgt der Vorgabe', () => {
    const order = ['brust', 'atem', 'schwindel', 'bauch'];
    expect(orderSymptoms(['bauch', 'brust', 'schwindel'], order)).toEqual(['brust', 'schwindel', 'bauch']);
    expect(orderSymptoms(['unbekannt'], order)).toEqual([]);
  });
});
